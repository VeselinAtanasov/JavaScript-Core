function countLetter(str,letter){
    "use strict";
    let count=0;
    for (let i=0; i<str.length;i++) {
        if(str[i]===letter){
            count++;
        }
    }
    console.log(count);
}