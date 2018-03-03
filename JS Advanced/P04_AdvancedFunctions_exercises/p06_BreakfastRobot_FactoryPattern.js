function robot() {
    let ingredients = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let interpretCommand = {
        report: reportStatistics,
        restock: restockCommand,
        prepare: prepareRecipe
    };
    function prepareRecipe(tokens) {
        let product = tokens[1];
        let quantity = Number(tokens[2]);
        let currentProduct = ingredients[product];
        for (let i = 0; i < quantity; i++) {
            let isCooked = true;
            for (let element in currentProduct) {
                if (microelements[element] - ingredients[product][element] >= 0) {
                } else {
                    return `Error: not enough ${element} in stock`
                }
            }
            for (let element in currentProduct) {
                microelements[element] -= ingredients[product][element];
            }
        }
        return "Success"
    }

    function restockCommand(tokens) {
        let microelement = tokens[1];
        let quantity = Number(tokens[2]);
        microelements[microelement] += quantity;
        return "Success";
    }

    function reportStatistics() {
        let result = [];
        for (let element in microelements) {
            result.push(element + "=" + microelements[element])
        }
        return result.join(" ");
    }


    return function (command) {
        let tokens = command.split(" ");
        let result = interpretCommand[tokens[0]];
        return result(tokens);
    }
}