
function increment(selector){
    console.log(selector);
    let holder = $(selector);
    let fragment = document.createDocumentFragment()
    let textarea = $('<textarea>')
    textarea.addClass('counter');
    textarea.val('0');
    textarea.attr('disabled', true);

    let incrementBtn = $('<button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id','incrementBtn');
    incrementBtn.text('Increment')

    let addBtn = $('<button>');
    addBtn.addClass('btn');
    addBtn.attr('id','addBtn');
    addBtn.text('Add');

    let list= $('<ul>')
    list.addClass('results');

    $(incrementBtn).on('click', function (){
        textarea.val(Number(textarea.val())+1);
    })

    addBtn.on('click',function (){
        let li = $('<li>');
        li.text(textarea.val())
        list.append(li);

    })

    textarea.appendTo(fragment)
    incrementBtn.appendTo(fragment)
    addBtn.appendTo(fragment)
    list.appendTo(fragment)
    holder.append(fragment)
}