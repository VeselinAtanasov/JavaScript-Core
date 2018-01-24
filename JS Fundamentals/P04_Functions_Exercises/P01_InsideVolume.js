
function insideVolume(arr){
    "use strict";
    let x1=10; let x2 = 50;
    let y1=20; let y2=80;
    let z1=15; let z2=50;

    for (let i = 0; i < arr.length; i+=3) {
       let x=arr[i];
       let y=arr[i+1];
       let z=arr[i+2];

       if(x1<=x && x2>=x && y1<=y && y2>=y && z1<=z && z2>=z){
           console.log("inside");
       }else{
           console.log("outside");
       }
    }
}

insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);