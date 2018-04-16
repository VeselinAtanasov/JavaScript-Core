$(() => {
    const app = Sammy('#main', function () {
        //Allow Handlebars in Sammy:
        this.use('Handlebars', 'hbs');

        //home/login/register
        this.get('skeleton.html', getWelcomePage);
        this.get('#/home', getWelcomePage);

        function getWelcomePage(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    header: './templates/common/header.hbs',

                }).then(function () {
                    this.partial('./templates/viewRegister.hbs');
                })
            } else {
                ctx.isAuth = auth.isAuth();
                ctx.redirect('#/chirps');

            }
        }

        function calcTime(dateIsoFormat) {
            let diff = new Date - (new Date(dateIsoFormat));
            diff = Math.floor(diff / 60000);
            if (diff < 1) return 'less than a minute';
            if (diff < 60) return diff + ' minute' + pluralize(diff);
            diff = Math.floor(diff / 60);
            if (diff < 24) return diff + ' hour' + pluralize(diff);
            diff = Math.floor(diff / 24);
            if (diff < 30) return diff + ' day' + pluralize(diff);
            diff = Math.floor(diff / 30);
            if (diff < 12) return diff + ' month' + pluralize(diff);
            diff = Math.floor(diff / 12);
            return diff + ' year' + pluralize(diff);
            function pluralize(value) {
                if (value !== 1) return 's';
                else return '';
            }
        }


        //Register
        this.post('#/register', function (ctx) {
            console.log(ctx);
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;
            if (!/[A-Za-z]{5,}/.test(username)) {
                notify.showError("User name should be at least 5 symbols")
            } else if (password === '') {
                notify.showError("Password cannot be empty")
            } else if (password !== repeatPass) {
                notify.showError("Both passwords should match!")
            } else {
                let subscriptions = [];
                auth.register(username, password, subscriptions)
                    .then(function (loginInfo) {
                        auth.saveSession(loginInfo);
                        notify.showInfo("User registration successful")
                        //TODO.. feed page to be displayed!!!
                        // ctx.redirect('#/chirps')
                        getWelcomePage(ctx)
                    }).catch(notify.handleError);
            }
        });

        this.get('#/register', function (ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    header: './templates/common/header.hbs',

                }).then(function () {
                    this.partial('./templates/viewRegister.hbs');
                })
            } else {
                // ctx.redirect('#/chirps');  //TODO...
                getWelcomePage(ctx)

            }

        });

        //Login
        this.get('#/login', function (ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    header: './templates/common/header.hbs',

                }).then(function () {
                    this.partial('./templates/viewLogin.hbs');
                })
            } else {
                //  ctx.redirect('#/chirps');  //TODO...
                getWelcomePage(ctx)

            }

        });

        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            if (!/[A-Za-z]{5,}/.test(username)) {
                notify.showError("User name should be at least 5 symbols")
            } else if (password === '') {
                notify.showError("Password cannot be empty")
            } else {

                auth.login(username, password)
                    .then(function (loginInfo) {
                        auth.saveSession(loginInfo);
                        notify.showInfo("Login successful");
                        //TODO.. feed page to be displayed!!!
                        // ctx.redirect('#/chirps')
                        getWelcomePage(ctx)
                    }).catch(notify.handleError);
            }
        });

        //Logout user:
        this.get('#/logout', function (ctx) {
            auth.logout()
                .then(function (info) {
                    notify.showInfo('Logout successful.');
                    sessionStorage.clear();
                    ctx.redirect('#/login')
                }).catch(notify.handleError)
        });

        //Get all chirps:
        //GET https://baas.kinvey.com/appdata/app_key/chirps?query={"author":{"$in": [subs]}}&sort={"_kmd.ect": 1}

        this.get('#/chirps', function (ctx) {
            if (!auth.isAuth()) {
                getWelcomePage(ctx);
                return;
            }
            let subscriptions = sessionStorage.getItem('subscriptions');
            let username = sessionStorage.getItem('username');

            let chirpsCountPromise = chirps.getCountChirps(username);
            let chirpsFollowersPromise = chirps.getCountFollowers(username);
            let chirpsFollowingPromise = chirps.getCountFollowing(username);

            Promise.all([chirpsCountPromise, chirpsFollowersPromise, chirpsFollowingPromise])
                .then(([chirpsNumber, chirpsFollower, chirpsFollowing]) => {

                    console.log(chirpsNumber);
                    console.log(chirpsFollower);
                    console.log(chirpsFollowing);

                    ctx.chirpsNumber = chirpsNumber.length;
                    ctx.followers = chirpsFollower.length;
                    ctx.following = chirpsFollowing[0].subscriptions.length;

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');

                    chirps.getAllChirps(subscriptions)
                        .then(function (allChirps) {
                            console.log(allChirps);
                            allChirps.forEach((chirp, index) => {
                                chirp.date = calcTime(chirp._kmd.ect);
                                chirp.isAuthor = chirp._acl.creator === sessionStorage.getItem('userId')

                            });
                            ctx.isAuth = auth.isAuth();
                            ctx.articles = allChirps;
                            ctx.username = sessionStorage.getItem('username');

                        }).catch(notify.handleError);


                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        header: './templates/common/header.hbs',
                        article: './templates/forms/article.hbs',
                    }).then(function () {
                        this.partial('./templates/vewFeeds.hbs')
                    })
                }).catch(notify.handleError);



        })


    });

    app.run()

});