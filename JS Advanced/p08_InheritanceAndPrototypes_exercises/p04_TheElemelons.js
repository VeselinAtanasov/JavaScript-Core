function result() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly")
            }
            this.melonSort = melonSort;
            this.wight = Number(weight);
        }

        toString() {
            let result = "";
            result += `Element: ${this.constructor.name.replace('melon', '')}\n`;
            result += `Sort: ${this.melonSort}\n`;
            result += `Element Index: ${this.elementIndex}\n`
            return result.trim();
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.wight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.wight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.wight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = this.wight * this.melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }
    }
    class Melolemonmelon extends Airmelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        }

        morph() {
            let current = this.elements.shift();
            this.elements.push(current);
        }

        toString() {
            let result = "";
            result += `Element: ${this.elements[0]}\n`;
            result += `Sort: ${this.melonSort}\n`;
            result += `Element Index: ${this.elementIndex}\n`
            return result.trim();
        }
    }
    return {Melon,Watermelon,Earthmelon,Firemelon,Airmelon,Melolemonmelon}
}


let classes = result();

let test = new classes.Watermelon(5, 'Rotten');
console.log(test.toString())

// expect(test.toString()).to.be.equal(
//     "Element: Water\n" +
//     "Sort: Rotten\n" +
//     "Element Index: 30",
//     "'Elemelons toString()' function does not return correct results");

