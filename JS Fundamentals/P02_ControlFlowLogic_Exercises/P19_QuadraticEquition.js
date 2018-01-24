
function equition(a,b,c){
    "use strict";
    let x1=(-b+Math.sqrt(b*b-4*a*c))/(2*a);
    let x2=(-b-Math.sqrt(b*b-4*a*c))/(2*a);

    if(x1===x2){
        console.log(x1);
    }else if(!isNaN(x1) && !isNaN(x2)) {
        console.log(Math.min(x1,x2));
        console.log(Math.max(x1,x2));
    }else {
        console.log("no")
    }
}

equition(6,
11,
-35
);