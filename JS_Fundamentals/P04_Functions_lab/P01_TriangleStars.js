function printTriangle(n) {
    "use strict";
    function printStar(i) {
        console.log("*".repeat(i));
    }

    for (let i = 0; i < n; i++) {
        printStar(i+1);
    }

    for(let j=n-1;j>=1;j--){
        printStar(j)
    }
}

printTriangle(5);