

function rounding(arr) {
    let num=Number(arr[0]);
    let precision=Number(arr[1]);

    let result=Math.round(num*Math.pow(10,precision))/Math.pow(10,precision);
    return result;

}

console.log(rounding([3.1415926535897932384626433832795, 2]));