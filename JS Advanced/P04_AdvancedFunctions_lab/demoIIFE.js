
//In order to avoid collision in function names -> to have 2 function with the same name we can:
//The problem is that when we want to use one of the functions in the object we need to assign this object to variable:
// let myModule= module() -> now we have access to the functions inside the object
//But if we make module() an IIFE this means that it will be generated immediately when it is created
(function module() {
    function test(){
        "use strict";

    }

    function doStuff() {

    }

    // window.module ={  -- if we want to attached the result to the window html
    //     test,
    //     doStuff
    // }
    return {
        test,
        doStuff
    }
})();

//IIFE is used to create private methods, or properties