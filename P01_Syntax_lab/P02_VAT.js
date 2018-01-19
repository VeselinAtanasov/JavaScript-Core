
function calculateVat(arr){
    "use strict";
    let sum=0;
    for (let num of arr) {
        sum+=num;
    }

    console.log("sum= " + sum);
    console.log("VAT= "+sum*0.2);
    console.log("total= "+ sum*1.2);
}


calculateVat([1.20, 2.60, 3.50])