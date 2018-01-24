function modifyAverage(n) {
    "use strict";
    let number = Number(n);

    function checkAverage(number) {
        let digitsSum = Array.from(number.toString()).map(Number).reduce((a, b) => a + b);
        if (digitsSum / number.toString().length > 5) {
            return true;
        }
        return false;
    }
    
    while (!checkAverage(number)) {
        number = number + "" + 9;
    }
    return number;
}

console.log(modifyAverage(101));