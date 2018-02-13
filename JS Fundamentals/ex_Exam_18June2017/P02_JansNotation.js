function calc(arr){
    let allNumbers=[];
    for (let number of arr) {
        if(Number.isFinite(number)){
            allNumbers.push(Number(number));
        }else{
            if(allNumbers.length>=2){
                let first=allNumbers.pop();
                let second=allNumbers.pop();
                let result=eval(second+number+first);
                allNumbers.push(result);
            }else{
                console.log("Error: not enough operands!");
                return;
            }
        }
    }

    if(allNumbers.length===1){
        console.log(allNumbers[0]);
    }else{
        console.log("Error: too many operands!");
    }
}