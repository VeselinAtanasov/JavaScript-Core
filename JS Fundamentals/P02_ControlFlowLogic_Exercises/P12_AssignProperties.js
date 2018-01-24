
function properties(arr){
    "use strict";
    let person={};
    person[arr[0]]=arr[1];
    person[arr[2]]=arr[3];
    person[arr[4]]=arr[5];

    return person;
}

console.log(properties(['name', 'Pesho', 'age', '23', 'gender', 'male']));