
let str="vdhfh45 dsds 434dsad5 4 234 ";
let patt=/([0-9])+(?=\s)/g

let matches=patt.exec(str)
while (matches){
    console.log(matches[0])
    matches=patt.exec(str);
}