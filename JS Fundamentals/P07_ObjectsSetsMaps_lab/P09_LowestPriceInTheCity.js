function check(arr){
    let map = new Map();

    for(let row of arr){
        let tokens=row.split(" | ").filter(x => x!=="");
        let town=tokens[0];
        let product=tokens[1];
        let price= Number(tokens[2]);

        if(!map.has(product)){
            map.set(product, new Map());
        }
        map.get(product).set(town,price);
    }
    for(let [product,innerMap] of map){
        let sortted =Array.from(innerMap).sort((a,b) => a[1] -b[1])[0];
                               //here we get directly the first element now it is a simple array ['Sample Town', 1000]
        console.log(`${product} -> ${sortted[1]} (${sortted[0]})`)
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