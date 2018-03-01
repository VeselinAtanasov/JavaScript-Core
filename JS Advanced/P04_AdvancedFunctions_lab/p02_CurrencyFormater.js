
function getDollars(func) {
    return function (value) {
        return   func(",","$",true,value)
    }
}

//let dollars=getDollars(currencyFormatter)(5345); Works!!!
let dollars=getDollars(currencyFormatter);
console.log(dollars(5566555))


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
