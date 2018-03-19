
function proto(baseClass) {
    baseClass.prototype.species = "Human";
    baseClass.prototype.toSpeciesString=function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    toString() {
        let type = this.constructor.name;
        return `${type} (name: ${this.name}, email: ${this.email})`;
    }
}


proto(Person);
let per =new Person("veselin",'123@abv')
console.log(per.toSpeciesString());