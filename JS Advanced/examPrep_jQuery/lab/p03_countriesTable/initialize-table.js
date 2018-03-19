function initializeTable() {
    $('#createLink').click(createCountry);
    createRecord('Bulgaria', 'Sofia');
    createRecord('Germany', 'Berlin');
    createRecord('Russia', 'Moscow');
    fixRows();

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        createRecord(country.val(), capital.val());
        country.val("");
        capital.val("");
        fixRows();
    }

    function createRecord(country, capital) {
        let row = $('<tr>')
            .append($('<td>').text(`${country}`))
            .append($('<td>').text(`${capital}`))
            .append($('<td>')
                .append($("<a href ='#'>[Up]</a>").click(moveUp))
                .append($("<a href='#'>[Down]</a>").click(moveDown))
                .append($("<a href='#'>[Delete]</a>").click(deleteRecord)));

        $('#countriesTable').append(row)
    }

    function moveUp() {
        let current = $(this).parent().parent();
        current.insertBefore(current.prev())
    }

    function moveDown() {
        let current = $(this).parent().parent();
        current.insertAfter(current.next())
    }

    function deleteRecord() {
        let current = $(this).parent().parent();
        current.remove()
    }

    function fixRows() {
        let table =$('#countriesTable').find('a');
        table.show();

        $('tr:last-child a:contains("Down")').hide()
        $('tr:eq(2) a:contains("Up")').hide()
    }

}