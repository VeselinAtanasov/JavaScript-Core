
function captureTheNumbers(arr){
    "use strict";
    let pattern=/[0-9]+/g;
    let result=[];

    for (let sentence of arr) {
        let matches=sentence.match(pattern);
        if(!matches){
            continue;
        }
        for (let i = 0; i < matches.length; i++) {
           result.push(matches[i]);
        }
    }
    return result.join(" ");
}

console.log(captureTheNumbers([
    'What is that?'
]));