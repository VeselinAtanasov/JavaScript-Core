
function addItem() {
    let input=document.querySelector('#newItemText');
    if(input.value === ""){
        return;
    }
    let ul=document.querySelector('#items');
    let newLi=document.createElement('li');
    newLi.textContent=input.value;
    ul.appendChild(newLi);
    input.value=""
}