function createBook (selector, title, author, ISBN) {

    let counter=1;
    let fragment = document.createDocumentFragment();
    let bookContainer = $('<div>')
    bookContainer.attr('id',`book${counter}`);
    bookContainer.css('border','none');

    let titleParagraph=$(`<p>${title}</p>`);
    let authorParagraph=$(`<p>${author}</p>`);
    let isbnParagraph=$(`<p>${ISBN}</p>`);

    titleParagraph.addClass('title');
    authorParagraph.addClass('author');
    isbnParagraph.addClass('isbn');

    let selectBtn=$('<button>Select</button>')
    let deselectBtn=$('<button>Deselect</button>')
    selectBtn.on('click',selected)
    deselectBtn.on('click',deselected)

    bookContainer.append(titleParagraph);
    bookContainer.append(authorParagraph);
    bookContainer.append(isbnParagraph);
    bookContainer.append(selectBtn);
    bookContainer.append(deselectBtn);
    $(selector).append(bookContainer)

    function selected(){
        bookContainer.css('border','2px solid blue')
    }

    function deselected(){
        bookContainer.css('border','none')
    }

}