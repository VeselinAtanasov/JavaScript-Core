
function lastMonth(arr){
    "use strict";
    let day=arr[0];
    let month=arr[1];
    let year=arr[2];

    let date = new Date(year,month-1,0);
     return date.getDate()
}

// console.log(lastMonth(([17, 3, 2002])))


function getLastMonth(arr){
    "use strict";
    let day=arr[0];
    let month=arr[1];
    let year=arr[2];

    let date = new Date(year,month-1,day);
    return date.getDate()
}

console.log(getLastMonth(([17, 3, 2002])))