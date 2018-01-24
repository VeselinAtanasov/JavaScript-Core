
function calculateCone(radius,height){
    "use strict";
    let volume=(Math.PI*radius*radius*height)/3;
    let s =Math.sqrt(height*height+radius*radius);
    let surface=Math.PI*radius*(s+radius);
    console.log(`volume = ${volume}`);
    console.log(`area = ${surface}`);
}

calculateCone(3,5);