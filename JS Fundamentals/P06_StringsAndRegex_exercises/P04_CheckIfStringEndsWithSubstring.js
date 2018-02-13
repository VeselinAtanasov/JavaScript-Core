
function isEndsWith(mainString,subString){
    "use strict";
    function escapeRegExp(string){
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    let pattern=new RegExp(escapeRegExp(subString)+"$","g");

    return pattern.test(mainString);
}



console.log(isEndsWith('This sentence ends with fun?',
    'fun?'
));