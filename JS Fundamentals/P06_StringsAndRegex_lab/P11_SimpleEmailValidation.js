
function emailValidation(str){
    "use strict";
    let pattern=/^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)*$/;
    if(pattern.test(str)){
        return "Valid";
    }else {
        return "Invalid";
    }
}

console.log(emailValidation('valid@email.bg'));