function figureOfSqueres(n) {
    "use strict";
    //+-----+-----+  7
    let result = "";
    //start
    for (let i = 0; i < 2 * n - 1; i++) {
        if (i === 0 || i === 2 * n - 2 || i === n - 1) {
            result += "+";
        } else {
            result += "-";
        }
    }
    result += "\n";

    for (let i = 0; i < Math.floor((n - 3) / 2); i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (j === 0 || j === 2 * n - 2 || j === n - 1) {
                result += "|";
            } else {
                result += " ";
            }
        }
        result += "\n";
    }

    //middle:
    for (let i = 0; i < 2 * n - 1; i++) {
        if (i === 0 || i === 2 * n - 2 || i === n - 1) {
            result += "+";
        } else {
            result += "-";
        }
    }
    result += "\n";

    for (let i = 0; i < Math.floor((n - 3) / 2); i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (j === 0 || j === 2 * n - 2 || j === n - 1) {
                result += "|";
            } else {
                result += " ";
            }
        }
        result += "\n";
    }

    //end:
    for (let i = 0; i < 2 * n - 1; i++) {
        if (i === 0 || i === 2 * n - 2 || i === n - 1) {
            result += "+";
        } else {
            result += "-";
        }
    }
    result += "\n";

    if (n === 2) {
        return "+++"
    } else {
        return result;
    }

}

console.log(figureOfSqueres(2));