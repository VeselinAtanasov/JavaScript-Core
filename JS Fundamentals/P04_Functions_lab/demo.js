/**
 * How to document our code
 * @param a
 * @param b
 * @returns {number}
 */
function calc(a,b){
    "use strict";
    return a-b;
}
//========================================================================
/**
 * Get index of element in array
 * @type {number}
 */
let arr=[1,2,3,4];
let index=arr.indexOf(3);
console.log(index+1)
//========================================================================
//Immediately-invoked function expression (IIFE)
/**
 * IIFE with return value:
 */
let result=(function performOperation(a,b) {
    return a+b;
}(5,6));
console.log(result);
/**
 * IIFE which prints data:
 */
(function print(a){
    "use strict";
    console.log("* ".repeat(a));
}(5));

//===============================================================================
/**
 * What is a closure ??? Closure is IIFE but returns functio!!
 * We can define IIFE function which returns another function!
 * In this case when we invoke closure the value of h will be increment each time,
 * but closure returns function here, and the value of x is 0 and it is keept in the memory;
 * So the in the first iteration closure=0, when we invoke closer() then we return the old value of x but incremented with one; and so on
 */

let closure =(function(){
    "use strict";
    let x=0;
    return function (){return x++ };
}());
// here we say x=5, but x inside the closure function and it is not changed, it's hidden inside the function!!
x=5;
console.log(closure());
console.log(closure());
console.log(closure());

//===========================================
/**
 * Arrow Functions:
 */
