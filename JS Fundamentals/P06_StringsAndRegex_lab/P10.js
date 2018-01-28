
function matchAllWords(text){
    "use strict";
    let pattern=/[a-zA-Z0-9_]+/gi

    let matches=text.match(pattern).join("|");

    return matches
}

console.log(matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));
