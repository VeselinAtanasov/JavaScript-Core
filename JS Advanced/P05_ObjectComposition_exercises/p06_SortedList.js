function collection() {
    let numbers = [];
    function sorter() {
        numbers.sort((a, b) => a - b);
    }
    let obj = {
        size: 0,
        add: function (element) {
            numbers.push(element);
            this.size++;
            sorter();
        },
        remove: function (index) {
            if (numbers.length > index && index >= 0) {
                numbers.splice(index, 1);
                this.size--;
            }
            sorter();
        },
        get: function (index) {
            if (numbers.length > index && index >= 0) {
                return numbers[index];
            }
            sorter();
        }
    };

    return obj;
}

let a = collection()
console.log(a)
a.add(5)
console.log(a.size);
// console.log(a.numToDELL);
a.add(3)
// console.log(a.numToDELL);
a.remove(0)
console.log(a.size);
