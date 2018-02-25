
function deleteByEmail(){
    "use strict";
    let input=document.getElementsByName("email")[0];

    let table=document.querySelectorAll("table td");
    let deleted=false;
    for (let i=1 ; i<table.length ; i+=2) {
         if(input.value === table[i].textContent){
            let wholeTable=table[i].parentNode.parentNode;
             wholeTable.removeChild(table[i].parentNode);
             deleted=true;
             break;
         }
    }
    if(deleted){
        document.getElementById("result").textContent="Deleted."
    }else{
        document.getElementById("result").textContent="Not found."
    }
    input.value="";

}