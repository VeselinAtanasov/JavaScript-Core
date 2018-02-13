
function toJSON(arr){
    "use strict";
    let pattern=(/\s*\|\s*/g);
    let heading=arr.shift().split(/\s*\|\s*/g).filter(x => x!=="");
    let townsInJSON=[];
    for (let row of arr) {
        let tokens=row.split(pattern).filter(x => x!=="");
        let obj={};
        for (let i = 0; i < tokens.length; i++) {
            if(isFinite(tokens[i])){
                obj[heading[i]]=Number(tokens[i]);
            }else{
                obj[heading[i]]=tokens[i];
            }
        }

        townsInJSON.push(obj);
    }
    return JSON.stringify(townsInJSON);
}

console.log(toJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));