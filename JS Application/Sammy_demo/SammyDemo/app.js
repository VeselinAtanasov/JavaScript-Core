const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/index.html', function () {
        this.swap('<h2>Home Page</h2>');
    });
    this.get('#/about', function () {
        this.swap('<h2>About Page</h2>');
    });
    this.get('#/contact', function () {
        this.swap('<h2>Contact Page</h2>');
    });
    this.get('#/catalog', displayCatalog);

    this.get('#/catalog/:id', displayCatalog)

    function displayCatalog(context) {
        context.swap(`<h2>My Catalog</h2>
<a href="#/catalog/01">Product 1</a>
<a href="#/catalog/02">Product 2</a>
<a href="#/catalog/03">Product 3</a>`);

        console.log(context.params)
    }

    this.get('#/login', () => {
        this.swap(`<form action="#/login" method="post">
User: <input name="username" type="text"><br>
Pass: <input name="password" type="password"><br>
<input type="submit" value="Login">
        `)
    });
    this.post('#/login', (context) => {
        "use strict";
        console.log(context.params.username);
        console.log(context.params.password);
        context.redirect('#/catalog')
    });

    this.get('#/greet/:name',function(context) {

        context.loadPartials({
           first_line : './templates/partial1.hbs',
           second_line : './templates/partial2.hbs',
        }).then(function () {
            context.partials=this.partials
            context.title ="Handlebars";
            context.name = context.params.name;
            console.log(context.partial('./templates/greeting.hbs'))
        });
    })

});

$(() => {
    app.run();
});
