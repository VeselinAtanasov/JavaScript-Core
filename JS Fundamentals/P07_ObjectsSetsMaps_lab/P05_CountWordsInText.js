
function countWords(arr){
    "use strict";
    let splitStr =arr[0].split(/[^A-Za-z0-9_]/g).filter(x => x!=="");

    let words= {};

    for (let word of splitStr) {
        if(!words.hasOwnProperty(word)){
            words[word]=0;
        }
        words[word]+=1;
    }
    console.log(JSON.stringify(words))
}

countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);