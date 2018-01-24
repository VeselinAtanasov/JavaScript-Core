
function isPalindrome(str){
    "use strict";
    //1 option->  faster one
    for (let i = 0; i < str.length/2; i++) {
        let checker=true;
        if(str[i]!==str[str.length-i-1]){
            return false;
        }
        return checker;
    }

    //2 option ->   slower one
    let strToArr = Array.from(str).reverse().join("");
    if(str===strToArr){
        return true;
    }
    return false;
}

console.log(isPalindrome("racecar"));