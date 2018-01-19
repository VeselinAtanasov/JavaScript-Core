
function pointInRectangle( arr){
    let x=arr[0];
    let y= arr[1];
    let xMin=arr[2];
    let xMax=arr[3];
    let yMin=arr[4];
    let yMax=arr[5];
    "use strict";
    if(xMin<=x && xMax>=x && yMin<=y && yMax>=y){
        return "inside";
    }
    else {
        return "outside"
    }
}

