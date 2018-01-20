
function isLeapYear(year){
    "use strict";
    if ((year%4===0 && year%100!==0) || year%400===0){
        return "yes";
    }

    return "no";
}

console.log(isLeapYear(1900));