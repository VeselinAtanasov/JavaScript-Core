/**
 * Another solution of this problem is with if-else or switch case
 * @param day
 * @returns {*}
 */
function findDayIndexByName(day){
    "use strict";
    let dayOfWeek=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let index=dayOfWeek.indexOf(day);

    return index>-1 ? index+1 : "error";
}

console.log(findDayIndexByName("Wednesday"));