function townsPop(arr) {
    let townsMap = new Map();

    for (let row of arr) {
        let [name, population] = row.split(" <-> ");

        if (!townsMap.has(name)) { // check if the key exists
            townsMap.set(name, 0); // create the key with value 0
        }
        townsMap.set(name, townsMap.get(name) + Number(population)); // get the old value and increased it
    }

    // [...townsMap].forEach(([town,pop]) => console.log(`${town} : ${pop}`))  // first option
    // for (let [key, value] of townsMap) {    // another option
    //     console.log(`${key} : ${value}`);
    // }
    Array.from(townsMap).forEach(([town, pop]) => console.log(`${town} : ${pop}`)) // second option
}

townsPop(['Varna <-> 5555', 'Sofia <-> 555555555', 'Varna <-> 1']);