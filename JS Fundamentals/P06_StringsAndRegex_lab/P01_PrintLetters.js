
function printLetters(string){
    "use strict";
      string.split("").forEach( (c,i) => console.log(`str[${i}] -> ${c}`));
}

printLetters('Hello, World!');