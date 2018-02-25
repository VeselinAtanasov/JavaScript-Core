
function addItem(){
    "use strict";
    let itemText=document.getElementById("newItemText");
    let itemValue=document.getElementById('newItemValue');

    let element=document.createElement('option');
    element.textContent=itemText.value;
    element.value=itemValue.value;

    let divs =document.querySelectorAll('div select')[0];
    divs.appendChild(element);
    itemText.value='';
    itemValue.value='';
}