function engineeringCompany(arr){
    let inventory = new Map();

    for (let row of arr) {
        let tokens= row.split(" | ").filter(x => x!=="");
        let [brand,model,price] = tokens;
        price=Number(price);

        if(!inventory.has(brand)){
            inventory.set(brand,new Map())
        }

        if(!inventory.get(brand).has(model)){
            inventory.get(brand).set(model,0)
        }

        let oldValue=inventory.get(brand).get(model);
        inventory.get(brand).set(model,oldValue+price);
    }
    let sorted=Array.from(inventory.keys());
    for (let key of sorted) {
        console.log(key);
        let sorted2 = [...inventory.get(key).keys()];
        for (let obj of sorted2) {
            console.log(`###${obj} -> ${inventory.get(key).get(obj)}`)
        }
    }

}