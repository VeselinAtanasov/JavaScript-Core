
function calculator(a,b,operand){
    "use strict";
    let sum= (a,b) => a + b;
    let subtract= (a,b) => a - b;
    let multiply= (a,b) => a * b;
    let divide= (a,b)=>a / b;

    function calc(a,b,func){
        return func(a,b);
    }

    let result=null;
    switch(operand){
        case "+": result=  calc(a,b,sum);
            break;
        case "-": result=calc(a,b,subtract);
            break;
        case "*": result=calc(a,b,multiply);
            break;
        case "/": result=calc(a,b,divide);
            break;
    }

    return result;
}

console.log(calculator(18, -1, '+'));