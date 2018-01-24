
function isEvenOrOddOrInvalid(number) {
    if(!Number.isInteger(number)){
        return "invalid";
    }

    if(number%2===0){
        return "even";
    }
    if(number%2!==0){
        return "odd";
    }
}

console.log(isEvenOrOddOrInvalid(1.5));