class PaymentProcessor {
    constructor(options) {
        this.payments = {};
        this.options = this.setOptions(options);
    }

    // get options() {
    //     return this._options;
    // }

    setOptions(value) {
        let val = {
                types: ["service", "product", "other"],
                precision: 2
            };
        if (value) {
            if (value.hasOwnProperty('types')) {
                val['types'] = value['types']
            } else {
                val['types'] = ["service", "product", "other"]
            }
            if (value.hasOwnProperty('precision')) {
                val['precision'] = Number(value['precision'])
            } else {
                val['precision'] = 2
            }
        }
        this._options = val;
    }

    isIdPresent(id) {
        return this.payments.hasOwnProperty(id);
    }

    registerPayment(id, name, type, value) {
        if (typeof id !== 'string' || id === '' || this.isIdPresent(id)) {
            throw Error("ID is incorrect")
        }
        if (typeof name !== 'string' || name === '') {
            throw Error("Name is incorrect")
        }
        if (typeof value !== 'number') {
            throw Error("Value is incorrect - it's not a number")
        }
        if (!this._options.types.includes(type)) {
            throw Error("Type is not present in options!");
        }
        let obj = {
            'id': id,
            'name': name,
            'type': type,
            'value': value.toFixed(Number(this._options.precision))
        };
        this.payments[id] = obj;
    }

    deletePayment(id) {
        if (!this.isIdPresent(id)) {
            throw Error("ID is not found")
        }
        delete this.payments[id];
    }

    get(id) {
        if (!this.isIdPresent(id)) {
            throw Error("ID is not found")
        }
        let result = "";
        let element = this.payments[id];
        result += `Details about payment ID: ${element.id}\n`;
        result += `- Name: ${element.name}\n`;
        result += `- Type: ${element.type}\n`;
        result += `- Value: ${element.value}\n`;
        return result.trim();
    }

    toString() {
        let num=0;
        for (let obj in this.payments) {

            num += Number(this.payments[obj].value)
        }
        let result = "";
        result += `Summary:\n`;
        result += `- Payments: ${Object.keys(this.payments).length}\n`;
        result += `- Balance: ${num.toFixed(Number(this._options.precision))}\n`;

        return result.trim()
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
