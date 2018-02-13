
function heroicInventory(arr){
    "use strict";
    let heroes=[];
    for (let record of arr) {
        let obj={};
        let tokens= record.split(/\s*\/\s*/g).filter(x => x!=="");
        let name=tokens[0];
        obj['name']=name;
        let level=tokens[1];
        obj['level']=Number(level);
        obj['items']=[]
        if(tokens.length>2){
            let items=tokens[2].split(", ");
            obj['items']=items;
        }

        heroes.push(obj);
    }

    console.log(JSON.stringify(heroes))

}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);