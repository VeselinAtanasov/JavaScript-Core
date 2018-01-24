function solve(arr) {
    let smallest=Number.NEGATIVE_INFINITY;
    for(let row=0 ;row<arr.length ;row++){
        for(let col=0;col<arr[row].length;col++){
            if(arr[row][col]>smallest){
                smallest=arr[row][col]
            }
        }
    }

    return smallest;
}