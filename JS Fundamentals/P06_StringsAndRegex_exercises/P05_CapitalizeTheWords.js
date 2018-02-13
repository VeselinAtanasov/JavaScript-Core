
function upperWord(str){
    "use strict";
    let result=str.split(" ");
    let words=[];
    for (let word of result) {
        let upper=word[0].toUpperCase() +word.substring(1).toLowerCase();
        words.push(upper);
    }

    return words.join(" ").trim();
}

console.log(upperWord('Was that Easy? tRY thIs onE for SiZe!'));