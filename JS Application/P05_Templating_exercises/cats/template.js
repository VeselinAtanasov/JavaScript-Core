$(() => {

    renderCatTemplate();

    function renderCatTemplate() {
        let  source= $('#cat-template').html();
        let template = Handlebars.compile(source);
        let html = template({
            cats: window.cats
        });
        $('#allCats').append(html);
        $('.btn-primary').on('click',function () {
            let clickedBtn = $(this);
            if (clickedBtn.text() === 'Show status code') {
                clickedBtn.text('Hide status code');
            } else {
                clickedBtn.text('Show status code');
            }
            clickedBtn.next('div').toggle();
        });
    }

});
