
function aggregate(arr){
    "use strict";
    let towns=[];
    let sum=0;

    for (let key of arr) {
        let record=key.split("|").filter(x =>x!=="");
        towns.push(record[0].trim());
        sum+=Number(record[1].trim());
    }

     console.log(towns.join(", "));
    console.log(sum)

}

console.log(aggregate([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
));