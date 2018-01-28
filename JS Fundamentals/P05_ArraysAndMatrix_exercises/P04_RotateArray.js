function rotateArray(arr){
    let rotations=Number(arr.pop());
    let timeToRotate=rotations>arr.length ? rotations%arr.length : rotations
    for(let i=0 ;i<timeToRotate ;i++){
        let element =arr.pop();
        arr.unshift(element);
    }
    return arr.join(" ")
}