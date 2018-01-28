
function censorship(text,arr) {
    "use strict";
let res=""
    for (let key in arr) {
        let replacer ="-".repeat(arr[key].length);

        let index=text.indexOf(arr[key]);
        while (index>-1){
            text=text.replace(arr[key],replacer);
            index=text.indexOf(arr[key],index+1);
        }
    }
    return text
}

console.log(censorship('roses are red, violets are blue', [', violets are', 'red']))