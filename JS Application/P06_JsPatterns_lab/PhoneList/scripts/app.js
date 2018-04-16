$(() => {
    //Main Script - holds Routers and Sammy initialization:

    const app = Sammy('#main', function () {
        // allow Handlebars in Sammy:
        this.use('Handlebars', 'hbs');

        //home/login
        this.get('index.html', displayWelcome);

        function displayWelcome() {
            //Display login form
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/welcome.hbs')
            })

        }

        //register
        this.get('#/register', function () {
            //Display register form
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {

                this.partial('./templates/register.hbs')
            })
        });

        //contact book (catalog)
        this.get('#/contacts', function () {
            //Show contacts list
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                contact :'./templates/common/contact.hbs',
                contact_list :'./templates/common/contactList.hbs',
                contact_details :'./templates/common/details.hbs',
            }).then(function () {
                this.partial('./templates/contacts.hbs')
            })
        });

        //profile
        this.get('#/profile', function () {
            //Edit profile form
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/profile.hbs')
            })
        });

        //logout
        this.get('#/logout', function (context) {
            //Logout
            auth.logout()
                .then(function(data){
                   localStorage.clear();
                    context.redirect('index.html')
                })
        });

        //post login
        this.post('#/login', function (context) {
            // Handle login

            let username=context.params.username;
            let password = context.params.password;
            auth.login(username,password)
                .then(function(data){
                 auth.saveSession(data)
                    context.redirect('#/contacts')
                })
        });

        //post register
        this.post('#/login', function () {
            // Handle register
        });

        //post edit profile
        this.post('#/login', function () {
            // Handle edit profile
        });


    });

    app.run()

    //* user search
    //*messages

});