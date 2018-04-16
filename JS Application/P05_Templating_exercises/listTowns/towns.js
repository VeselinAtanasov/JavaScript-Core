function attachEvents() {
    $('#btnLoadTowns').on('click', function () {
        let context = {
            towns: []
        };
        context.towns = $('#towns').val().split(',').map(e => ({name: e.trim()})).filter(e => e.name !== '');
        renderTemplate(context);
    })
}

function renderTemplate(context) {
    let source = $('#towns-template').html();
    let template = Handlebars.compile(source);
    let html = template(context);
    $('#root').append(html);
    $('#towns').val('')
}
