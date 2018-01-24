function solve(arr) {

    let firstSum=0;
    let secondSum=0;
    for(let row=0 ;row<arr.length; row++){
        firstSum+=arr[row][row];
        secondSum+=arr[row][arr.length-1-row];
    }

    return firstSum+" "+secondSum;
}