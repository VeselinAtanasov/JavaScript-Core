
function calculateTriangleArea(a,b,c){
    "use strict";
    let semiP=(a+b+c)/2;
    let areaBySides=Math.sqrt(semiP*(semiP-a)*(semiP-b)*(semiP-c));

    return areaBySides;
}

console.log(calculateTriangleArea(2,
    3.5,
    4
));