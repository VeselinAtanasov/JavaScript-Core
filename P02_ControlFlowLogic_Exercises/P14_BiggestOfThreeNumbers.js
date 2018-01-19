
function findBiggest(arr) {

    let num=Number.NEGATIVE_INFINITY;
    for (let number of arr) {
        if(number>num){
            num=number;
        }
    }
    return num;
}