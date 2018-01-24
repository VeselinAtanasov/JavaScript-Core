
function binaryToDecimal(binary){
    "use strict";
    let number=parseInt(binary,2);
    return number;
}

//

function binaryToDecimalCalculation(binary){
    "use strict";

    let result=binary.split('').reverse().reduce(function(x,y,i){
        return (y ==='1') ? x + Math.pow(2,i) : x;
    },0);

    return result;

}

console.log(binaryToDecimalCalculation("00001001"));