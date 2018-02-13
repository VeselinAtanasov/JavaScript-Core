function populationInTown(arr) {
    "use strict";
    let mapTowns = new Map();

    for (let record of arr){
        let tokens=record.split(" <-> ").filter( x=> x!=="");
        let town=tokens[0];
        let population=Number(tokens[1]);

        if(!mapTowns.has(town)){
            mapTowns.set(town,0);
        }
        mapTowns.set(town,mapTowns.get(town)+population);
    }
        for(let [key,value] of mapTowns){
        console.log(`${key} : ${value}`)
        }
}

populationInTown([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);