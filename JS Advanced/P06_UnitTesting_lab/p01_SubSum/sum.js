
function subsum(arr,startindex,endIndex) {
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startindex<0){
        startindex=0;
    }
    if(endIndex>arr.length-1){
        endIndex=arr.length-1;
    }
    let sum=0;
    for (let i = Number(startindex); i <= Number(endIndex); i++) {
        sum+=Number(arr[i]);
    }
    return sum;
}
console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));
console.log(subsum([], 1, 2));
console.log(subsum('text', 0, 2));