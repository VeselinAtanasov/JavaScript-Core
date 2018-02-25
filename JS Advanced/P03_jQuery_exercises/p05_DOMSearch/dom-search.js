function domSearch(selector, isCaseSensitive) {
    let container = $(selector);
    container.addClass('items-control');
    addRecord();
    searchRecord();
    resultRecord();

    function addRecord() {
        let div = $('<div>').addClass('add-controls');
        div
            .append($('<lable>')
                .text("Enter text: ")
                .append($('<input>').val("")))
            .append($('<a>')
                .addClass('button')
                .css('display', 'inline-block')
                .text('Add')
                .on('click', addItem));
        container.append(div);

    }

    function searchRecord() {
        let div=$('<div>').addClass('search-controls');
        div.append($('<lable>')
            .text("Search:")
            .append($('<input>')
                .val("")
                .on('input',filterItems)));  // If the event is keypress -> it is not working
        container.append(div)
    }

    function resultRecord() {
      let div=$('<div>').addClass("result-controls");
        div.append($('<ul>')
            .addClass('items-list'));
      container.append(div)

    }
    
    function addItem() {
       let input = $(this).parent().find('input').val();

       if(!input){
           return ;
       }

       let listItems=$('.items-list')
           .append($('<li>')
               .addClass('list-item')
               .append($('<a>')
                   .addClass('button')
                   .text("X")
                   .on('click',deleteElement))
               .append($('<strong>')
                   .text(`${input}`)));
        $(this).parent().find('input').val("")
    }
    
    function filterItems() {
        let searchedItem = $(this).parent().find('input').val();
        if (isCaseSensitive) {
            $(`li.list-item strong:not(:contains("${searchedItem}"))`).parent().css('display', 'none');
        } else {
            $('li.list-item strong')
                .toArray()
                .filter(item => item.textContent.toLowerCase().indexOf(searchedItem.toLowerCase()) === -1)
                .forEach(item => item.parentNode.style.display = 'none');
        }
    }

    function deleteElement() {
        $(this).parent().remove()
    }

}
