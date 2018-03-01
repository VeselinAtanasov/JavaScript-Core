
function aggregater(arr) {
    function reducer(arr,func) {
        let result=arr[0];
        for (let element of arr.slice(1)) {
                result= func(result,element)
        }
        return result;
    }
    console.log('Sum = '+reducer(arr,(a,b)=> a+b));
    console.log('Min = '+reducer(arr,(a,b) => a>b ? b : a));
    console.log('Max = '+reducer(arr,(a,b) => a>b ? a : b));
    console.log('Product = '+reducer(arr,(a,b) => a*b));
    console.log('Join = '+reducer(arr,(a,b)=> ""+a +b));

}

aggregater([5, -3, 20, 7, 0.5]);