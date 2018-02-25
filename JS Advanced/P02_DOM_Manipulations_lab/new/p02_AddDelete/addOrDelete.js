function addItem() {

    let ul=document.getElementById('items');
    let input =document.getElementById('newText');
    if(input.value===""){
        return
    }
    let li = document.createElement('li');
    li.textContent=input.value+" ";
    let span = document.createElement('span');
    span.innerHTML = "<a href='#'>[Delete]</a>";
    span.children[0].addEventListener('click', deleteItem);
    li.appendChild(span);
    ul.appendChild(li);
    input.value="";

    function deleteItem(event) {
       let li =event.target.parentNode.parentNode;
       ul.removeChild(li)
    }
}