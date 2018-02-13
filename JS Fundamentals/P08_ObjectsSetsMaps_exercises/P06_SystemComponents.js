function systemComponents(arr){
    "use strict";
    let inventory=new Map();

    for (let row of arr) {
        let tokens=row.split(/\s*\|\s*/g).filter(x => x!=="");
        let system=tokens[0];
        let component=tokens[1];
        let subComponent=tokens[2];

        if(!inventory.has(system)){
            inventory.set(system,new Map);
        }
        if(!inventory.get(system).has(component)){
            inventory.get(system).set(component,[]);
        }
        let temp = inventory.get(system).get(component);
        temp.push(subComponent);
        inventory.get(system).set(component, temp);
    }

    function sortFunc(key1, key2) {
        if(inventory.get(key2).size===inventory.get(key1).size){
            return key1.localeCompare(key2);
        }

        return inventory.get(key2).size - inventory.get(key1).size;
    }

    let sortSystem=Array.from(inventory.keys()).sort((key1,key2) => sortFunc(key1,key2));
    function sortInsideFunc(arr1, arr2) {
            return arr2.length-arr1.length;
    }

    for (let key of sortSystem) {
        console.log(key)
        let sortInside=Array.from(inventory.get(key).keys()).sort((a,b)=>sortInsideFunc(inventory.get(key).get(a),inventory.get(key).get(b)))
        for (let obj of sortInside) {
            console.log(`|||${obj}`);
            for (let p of inventory.get(key).get(obj)) {
                console.log(`||||||${p}`)
            }
        }
    }
}


systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'

]);