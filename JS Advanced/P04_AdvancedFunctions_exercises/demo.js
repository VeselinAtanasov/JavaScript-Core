let func=(function () {
    let sum = 0;

    function increase(val) {
        sum += val;
        return sum;
    }

    increase.toString = function () {
        return sum;
    };
    return increase
})()

console.log(func(5));
console.log(func(6));