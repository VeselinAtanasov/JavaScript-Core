$(() => {
    async function loadTemplates() {
        try {
            let sourcePartial = await $.get('partial.hbs');
            Handlebars.registerPartial('partialM' , sourcePartial);
            let source = await $.get('contact.hbs');
            let template = Handlebars.compile(source);
            let context = {
                contacts: [
                    {name: 'Ivan Ivanov', email: 'i.ivanov@gmail.com',city : 'Pleven'},
                    {name: 'Maria Petrova', email: 'mar4eto@abv.bg',city : 'Pleven'},
                    {name: 'Jordan Kirov', email: 'jordk@gmail.com',city : 'Pleven'}
                ],
                title: 'All Contacts'
            };

            let html = template(context);
            $('#main').append(html)
        } catch (err) {
            console.log("Error!!!")
        }

    }

    loadTemplates();

});



