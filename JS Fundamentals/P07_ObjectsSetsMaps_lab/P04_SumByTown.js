function sumByTown(arr) {
    "use strict";
    let obj = {};

    for (let i = 0; i < arr.length - 1; i += 2) {
        let town = arr[i];
        let income = Number(arr[i + 1]);

        if (!obj.hasOwnProperty(town)) {
            obj[town] = 0;
        }
        obj[town] += income;
    }
    console.log(JSON.stringify(obj));

}

sumByTown([
    'Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4']
)