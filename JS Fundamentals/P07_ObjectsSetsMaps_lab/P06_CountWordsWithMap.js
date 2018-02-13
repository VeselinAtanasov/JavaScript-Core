
function countWordsWithMap(arr){
    "use strict";
    let pattern=/[^A-Za-z0-9_]/g;
    let map= new Map();
    for (let sentence of arr) {
        let sentenceTokens=sentence.split(pattern).filter(x=>x!=="");
        for (let word of sentenceTokens) {
            word=word.toLowerCase();
            if(!map.has(word)){
                map.set(word,0);
            }

            map.set(word,map.get(word)+1);
        }
    }
    /**
     * This is another option to sort map - create array from keys and sort this array.After that we can only iterate over the array
     * @type {Array.<*>}
     */
    let sortedKeys=Array.from(map.keys()).sort((a,b) => map.get(a) - map.get(b));
    for (let key  of sortedKeys) {
        console.log(`'${key}' -> ${map.get(key )} times`)
    }

    let newMap=new Map(Array.from(map).sort((a,b) => a[0].localeCompare(b[0])))
    for (let [key,value] of newMap) {
        console.log(`'${key}' -> ${value} times`)
    }
}


countWordsWithMap(['Far too slow, you\'re far too slow.'])