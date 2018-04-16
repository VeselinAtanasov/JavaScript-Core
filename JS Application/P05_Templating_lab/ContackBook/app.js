$(() => {
    const listContent = $('#list').find('.content');
    const listDetails = $('#details').find('.content');

    let templates = {};
    let context = {
        contacts: []
    };
    loadData();
    loadTemplates();
    async function loadData() {
        context.contacts = await $.get('data.json');
    }

    async function loadTemplates() {
        const [loadContacts, loadList, loadDetails] =
            await Promise.all([
                $.get('./templates/contactTemplate.hbs'),
                $.get('./templates/listTemplate.hbs'),
                $.get('./templates/detailTemplate.hbs'),
            ]);

        Handlebars.registerPartial('contact', loadContacts);
        templates.list = Handlebars.compile(loadList);
        templates.details = Handlebars.compile(loadDetails);


        renderListContacts()
    }

    function renderListContacts() {
        listContent.empty();
        listContent.append(templates.list(context));
        attachedEventListeners()
    }

    function attachedEventListeners() {
        $('.contact').click((e) => {

            let index = $(e.target).closest('.contact').attr('data-index');
            renderDetails(index);
            renderListContacts();
        });
    }

    function renderDetails(index) {
        listDetails.empty();
        listDetails.append(templates.details(context.contacts[index]))
    }

});