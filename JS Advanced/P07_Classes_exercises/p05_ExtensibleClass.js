let Extensible = (function () {
    let counter = 0;

    class Extensible {
        constructor(id) {
            this.id = counter++;
        }

        extend(template) {
            for (let templateProp of Object.keys(template)) {
                if(typeof template[templateProp] === 'function'){
                  Object.getPrototypeOf(this)[templateProp] = template[templateProp]; // this is the way to get tte prototype of obj
                }else{
                    this[templateProp]=template[templateProp];
                }
            }
        }
    }
    return Extensible;
})();


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
