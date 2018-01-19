
function distance(x1, y1, x2, y2){
    "use strict";
    let result=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))
    return result;
}

console.log(distance(2.34, 15.66, -13.55, -2.9985))
