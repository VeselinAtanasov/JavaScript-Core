
function formatCurrency(separator,symbol, isSymbolFirst,value){
    "use strict";
    let result= Math.trunc(value)+separator;
    result+=value.toFixed(2).substr(-2,2);

    if(isSymbolFirst){
        return symbol + " "+ result;
    }

    return result+" "+ symbol;
}

function getDollars(func) {
    return function (value) {
      return  func(".","$",true,value)
    }
}
let dollars=getDollars(formatCurrency)

console.log(dollars(53456));