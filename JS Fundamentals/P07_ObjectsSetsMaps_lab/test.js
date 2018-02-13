function check(arr) {
    "use strict";
    let inventory = {}
    for (let row of arr) {
        let tokens = row.split(" | ").filter(x => x !== "");
        let town = tokens[0];
        let product = tokens[1];
        let price = Number(tokens[2]);

        if (!inventory.hasOwnProperty(product)) {
            inventory[product] = {}
        }

        inventory[product][town] = price


    }
   // console.log(inventory)
    for (let obj in inventory) {
        let sorted = Object.values(inventory[obj]).sort((a,b) => a[1] -b[1])
        console.log(sorted)
       console.log(`${obj} -> ${sorted[0]} (${sorted[0]})`)
    }
}


check([
        'Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000'

    ]
)


