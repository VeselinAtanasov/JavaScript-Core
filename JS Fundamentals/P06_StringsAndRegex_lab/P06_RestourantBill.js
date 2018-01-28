
function payBill(arr){
    "use strict";
    let products=arr.filter((e,i)=> i%2===0).join(", ");
    let price = arr.filter((e,i) => i%2!==0).map(x => Number(x)).reduce((a,b) => a+b);

    console.log(`You purchased ${products} for a total sum of ${price}`);
}