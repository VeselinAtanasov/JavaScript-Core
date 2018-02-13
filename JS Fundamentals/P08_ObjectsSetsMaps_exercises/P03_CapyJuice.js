
function cappyJuice(arr){
    "use strict";
    let bottles={};
    let food={};
    for (let row of arr) {
        let tokens=row.split(/\s*=>\s*/g).filter(x => x!=="");
        let fruit=tokens[0];
        let price =Number(tokens[1]);
        if(!food.hasOwnProperty(fruit)){
            food[fruit]=0;
        }
        food[fruit]+=price;
        if(food[fruit]>=1000){
            let numBottles= parseInt(food[fruit]/1000);
            if(!bottles.hasOwnProperty(fruit)){
                bottles[fruit]=0;
            }
            bottles[fruit]+=numBottles;
            food[fruit]=food[fruit]%1000;
        }
    }


    for(let key in bottles){
        console.log(`${key} => ${bottles[key]}`)
    }

}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'

]);