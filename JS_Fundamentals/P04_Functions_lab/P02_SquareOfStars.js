
function starsSquare(n){
    "use strict";
    function printStar(i) {
        console.log("* ".repeat(i));
    }

    for (let i = 1; i <= n; i++) {
       printStar(n);
    }
}

starsSquare(5);