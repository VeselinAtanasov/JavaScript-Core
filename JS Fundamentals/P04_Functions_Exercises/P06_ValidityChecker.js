function checker(arr){
    let x1=arr[0];
    let y1=arr[1];
    let x2=arr[2];
    let y2=arr[3];

    let firstPoint=Math.sqrt(x1*x1 +y2*y2);
    let secondPoint=Math.sqrt(x2*x2 +y2*y2);
    let between =Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));

    if(Number.isInteger(firstPoint) ){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if(Number.isInteger(secondPoint) ){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if(Number.isInteger(between) ){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}