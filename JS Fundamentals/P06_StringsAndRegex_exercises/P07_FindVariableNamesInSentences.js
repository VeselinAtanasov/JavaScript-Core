
function findVariable(str){
    "use strict";
    let pattern=/\b_([a-zA-Z0-9]+)\b/g
    let result=[];
    let matches=pattern.exec(str);

    while (matches){
        let varArgs=matches[1];
        result.push(varArgs);
        matches=pattern.exec(str);
    }
    return result.join(",");
}

console.log(findVariable('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));