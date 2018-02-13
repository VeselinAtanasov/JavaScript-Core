let arr=['c','a','m','d']
let sorted=arr.sort((a,b) => a-b).forEach( s => console.log(s) ); // here a-b is not working with Strings!!!
let sortedCorr=arr.sort((a,b) => a.localeCompare(b)).forEach( s => console.log(s)) // We are comparing strings with localeCompare

// If we want to sort arr/map/set by first criteria - string length, and after that by string alphabetically:
// The syntax is first apply sort by alphabetically and then sort by string length: example bellow
sortArray = (arr) => arr.sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .join('\n')

//use a[0].localeCompare(b[0])  !!! to sort strings key !!!  and  a[0]-b[0]  to sort numbers!!!

let map = new Map();
map.set("veselin", 29);
map.set("atans", 43);
map.set("ivan", 33);
map.set("stamat", 11);
console.log(map);

let sortedByKey = new Map([...map].sort( (a, b) => a[0].localeCompare(b[0])));
console.log(sortedByKey);
let sortedByValue=new Map(Array.from(map).sort((a,b) => a[1]-b[1]));
console.log(sortedByValue);