function search() {
    let searchText = $('#searchText');
    let towns = $('#towns').find('li');
    let counter = 0;
    let input = searchText.val();
    towns.each((index, element) => {
        "use strict";
        if (element.textContent.includes(input)) {
            console.log(element);
            $(element).css('font-weight', 'bold');
            counter++;
        } else {
            $(element).css('font-weight', '')
        }
    });

    $('#result').text(counter + ' matches found.')

}