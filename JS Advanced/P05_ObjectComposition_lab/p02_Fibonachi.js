
    let fib =(function solve() {
        let f1 = 0;
        let f2 = 1;
        return function fibonachi() {
            let f3 = f1 + f2;
            f1 = f2;
            f2 = f3;
            return f1;
        }
    })();

    function getFibonator() {
        let f0 = 0, f1 = 1;
        return function() {
            let f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
            return f1;
        };
    }
