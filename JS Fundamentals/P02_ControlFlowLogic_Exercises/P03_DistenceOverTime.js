
function distance(arr) {
    let firstSpeed=arr[0];
    let secondSpeed=arr[1];
    let time=arr[2];

    let s1=time*firstSpeed/3.6
    let s2=time*secondSpeed/3.6

    return Math.abs(s1-s2)
}