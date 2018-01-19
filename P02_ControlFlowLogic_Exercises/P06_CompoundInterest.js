
function interests(arr) {
    let principalSum=arr[0];
    let interestRate=arr[1]/100;
    let months=arr[2];
    let year=arr[3];

    let freq=12/months;

    let result=principalSum*Math.pow((1+interestRate/freq),year*freq);

    console.log(result.toFixed(2));

}

interests([100000, 5, 12, 25]);