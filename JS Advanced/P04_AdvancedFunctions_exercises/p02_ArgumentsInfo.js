function argumentsInfo() {
    let storage = {};
    for (let key in arguments) {
        if (!storage.hasOwnProperty(typeof arguments[key])) {
            storage[typeof arguments[key]] = 0;
        }
        storage[typeof arguments[key]] += 1;
        console.log(typeof arguments[key] + ": " + arguments[key])
    }

    function sortingFunc(key1, key2) {
        return storage[key2] - storage[key1];
    }

    let sortedTypes = Object.keys(storage).sort((key1, key2) => sortingFunc(key1, key2));
    for (let key of sortedTypes) {
        console.log(key + " = " + storage[key]);
    }
}
argumentsInfo('cat', 42, function () {
    console.log('Hello world!');
});