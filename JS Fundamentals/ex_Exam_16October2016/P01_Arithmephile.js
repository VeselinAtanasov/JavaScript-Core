function parser(arr2) {
let arr=arr2.filter(x=>x!=="").map(Number);
    let productHolder=[];
    for (let num=0; num<arr.length ;num++) {
        if(arr[num] >=0 && arr[num]<10){
            let product=1;
            for (let i = 0; i <arr[num]; i++) {
                if(num+i<arr.length){
                    let test=arr[num+i+1]
                    product*=arr[num+i+1];
                }
            }
            productHolder.push(product);
        }
    }
    let res= productHolder.sort((a,b) => b-a)
    console.log(res[0])
}

parser([
    100,
    200,
    2,
    3,
    2,
    3,
    2,
    1,
    1,

]);