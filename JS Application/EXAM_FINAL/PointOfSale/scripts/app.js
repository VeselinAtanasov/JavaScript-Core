$(() => {

    const app = Sammy('#container', function () {
        //Allow Handlebars in Sammy:
        this.use('Handlebars', 'hbs');

        this.get('index.html', displayHomeScreen);
        this.get('#/index.html', displayHomeScreen);
        //this.get('#/home',displayHomeScreen);

        function displayHomeScreen(ctx) {
            ctx.isAuth = auth.isAuth();
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    header: './templates/common/header.hbs',
                    // loginForm: './templates/forms/loginForm.hbs',
                    //   registerForm: '/templates/forms/registerForm.hbs'
                }).then(function () {
                    this.partial('./templates/registerView.hbs');
                })
            } else {
                ctx.redirect('#/home');
            }
        }

        //Register user:
        this.post('#/register', function (ctx) {
            let username = ctx.params.usernameRegister;
            let password = ctx.params.passwordRegister;
            let repPass = ctx.params.passwordRegisterCheck;
            if (!/[A-Za-z]{5,}/.test(username)) {
                notify.showError("Username should be at least 5 characters!")
            } else if (password === '') {
                notify.showError("Password cannot be empty!")
            } else if (password !== repPass) {
                notify.showError("Both passwords should match!")
            } else {

                auth.register(username, password)
                    .then(function (userInfo) {
                        notify.showInfo("User registration successful.");
                        auth.saveSession(userInfo);
                        ctx.redirect('#/home');
                    }).catch(notify.handleError)
            }


        });
        //Login
        this.post('#/login', function (ctx) {
            let username = ctx.params.usernameLogin;
            let password = ctx.params.passwordLogin;

            if (!/[A-Za-z]{5,}/.test(username)) {
                notify.showError("Username should be at least 5 characters!")
            } else if (password === '') {
                notify.showError("Password cannot be empty!")
            } else {
                auth.login(username, password)
                    .then(function (userInfo) {
                        notify.showInfo("Login successful.");
                        auth.saveSession(userInfo);
                        ctx.redirect('#/home');
                    }).catch(notify.handleError)
            }
        });

        //Logout user:
        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(function (info) {
                    notify.showInfo('Logout successful.');
                    sessionStorage.clear();
                    //    displayHomeScreen(ctx)
                    ctx.redirect('#/index.html')
                }).catch(notify.handleError)
        });

        // Very bad logic... For displaying
        this.get('#/home', function (ctx) {
            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');
            //Get the current Active receipt - should be only one on the server if do not exists create new one:
            receipt.getActiveReceipt()
                .then(function (recipeInfo) {
                    if (recipeInfo.length === 0) {

                        ctx.productCount = 0;
                        ctx.total = 0;
                        //no active recipe on the db => create new one, i.e all fields should be empty
                        receipt.createRecipe()
                            .then(function (info) {
                                ctx.currentRecipeId = info._id;
                                notify.showInfo("New Empty receipt was created!")
                                ctx.loadPartials({
                                    footer: './templates/common/footer.hbs',
                                    header: './templates/common/header.hbs',
                                    product: './templates/product/product.hbs',
                                    entryForm: './templates/product/entryForm.hbs',
                                    recipeForm: './templates/product/recipeForm.hbs'
                                }).then(function () {
                                    this.partial('./templates/home.hbs');
                                })
                            }).catch(notify.handleError);
                    } else {

                        let recipeId = recipeInfo[0]._id;
                        ctx.currentRecipeId = recipeId
                        //get all products by id:
                        entry.getEntriesByRecipe(recipeId)
                            .then(function (products) {
                                ctx.productCount = products.length;
                                let total = 0;

                                products.forEach((product, index) => {
                                    product.subtotal = (Number(product.qty) * Number(product.price)).toFixed(2);
                                    total += Number(product.subtotal)
                                });
                                ctx.products = products;
                                ctx.total = total.toFixed(2);


                                ctx.loadPartials({
                                    footer: './templates/common/footer.hbs',
                                    header: './templates/common/header.hbs',
                                    product: './templates/product/product.hbs',
                                    entryForm: './templates/product/entryForm.hbs',
                                    recipeForm: './templates/product/recipeForm.hbs'
                                }).then(function () {
                                    this.partial('./templates/home.hbs');
                                })

                            }).catch(notify.handleError)

                    }
                }).catch(notify.handleError);


        });

        //Create product
        this.post('#/create/product', function (ctx) {
            let price = ctx.params.price;
            let qty = ctx.params.qty;
            let type = ctx.params.type;
            let recipeId = ctx.params.currentRecipeId;

            if (type === '') {
                notify.showError("Product cannot be empty");
            } else if (!isFinite(qty) || qty === '') {
                notify.showError("Quantity should be number");
            } else if (!isFinite(price) || price === '') {
                notify.showError("Price should be number");
            } else {
                entry.addEntry(type, qty, price, recipeId)
                    .then(function (info) {
                        notify.showInfo('Entry added');
                        ctx.redirect('#/home')
                    }).catch(notify.handleError)
            }
        });

        //delete product
        this.get('#/entry/delete/:id', function (ctx) {
            let id = ctx.params.id;
            entry.deleteEntry(id)
                .then(function (info) {
                    notify.showInfo('Entry removed');
                    ctx.redirect('#/home')
                }).catch(notify.handleError);
        });

        //checkout:
        this.post('#/checkout', function (ctx) {

            let productCount = ctx.params.productCount;
            let total = ctx.params.total;
            let currentRecipeId = ctx.params.currentRecipeId;
            if (Number(productCount) > 0) {
                receipt.commitReceipt(currentRecipeId, productCount, total)
                    .then(function (info) {

                        notify.showInfo('Receipt checked out');
                        ctx.redirect('#/home')
                    }).catch(notify.handleError);

            } else {
                notify.showError("You can not checkout receipt with 0 products!")
            }
        });

        //All receipts:
        this.get('#/overview', function (ctx) {


            receipt.getMyReceipt()
                .then(function (recipes) {
                    ctx.isAuth=auth.isAuth();
                    ctx.username=sessionStorage.getItem('username');
                    let allTotal = 0;
                    recipes.forEach((recipe, index) => {
                        let date = recipe._kmd.ect.split("T");
                        let first = date[0];
                        let sec=date[1].split('.')[0];
                        recipe.date = first+" "+sec;
                        allTotal += Number(recipe.total);
                    });
                    ctx.allTotal=allTotal.toFixed(2);
                    ctx.recipes=recipes
                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        header: './templates/common/header.hbs',
                        myrecipe: './templates/myreceipts/myrecipe.hbs'
                    }).then(function () {
                        this.partial('./templates/myreceipts/allreceipts.hbs');
                    })


                }).catch(notify.handleError);


        })

        //details:
        this.get('#/details/:id',function (ctx) {
            let recipeId=ctx.params.id;
            ctx.isAuth=auth.isAuth();
            ctx.username=sessionStorage.getItem('username')
            entry.getEntriesByRecipe(recipeId)
                .then(function (recipes) {
                    ctx.isAuth=auth.isAuth();
                    ctx.username=sessionStorage.getItem('username')
                    recipes.forEach((e,i) =>{
                         e.totalka=(Number(e.qty)*Number(e.price)).toFixed(2)
                    });


                    ctx.products=recipes
                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        header: './templates/common/header.hbs',
                        myrecipe: './templates/details/detailProduct.hbs'
                    }).then(function () {
                        this.partial('./templates/details/detailsRecipe.hbs');
                    })
                }).catch(notify.handleError)
        })

    });

    app.run()
});