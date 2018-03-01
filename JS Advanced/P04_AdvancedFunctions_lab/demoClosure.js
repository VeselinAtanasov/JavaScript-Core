//Every time when we invoke f() we receive counter value incremented
//Very useful if we want to generate unique ID!
//This is an example of closure ++ IIFE
let f = (function () { // here IFFE is assigned to a variable=> this variable has access to counter
    let counter=0; // here is the closure  some logic and after that we return a function which used this logic
    return function () {
        console.log(++counter);
    }
})();

// f();
// f();
// f();
// f();

//If we want to do a closure without IIFE:

function getClosure() {
    let counter=0;
    return function () {
        console.log(++counter);
    }
}

f2 = getClosure(); //The idea is that the score is created only once since we execute getClosure only once here and f2() has access to it!!!
f2();
f2();
f2();

//Here g and f2 are different
g = getClosure();
g();