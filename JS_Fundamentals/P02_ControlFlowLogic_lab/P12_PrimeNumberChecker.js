
function isPrime(num){
    "use strict";
    let prime = true;
    let max=Math.ceil(Math.sqrt(num));
    for (let d = 2; d <= max; d++) {
        if(num==d){
            continue;
        }
        if (num % d == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}