
//create multiple functions and add them in object tall of them should be inside one function module
//we make this function IIFE , because in this canse the object full with functions will be generated immediately !

let myModule=(function module() {
    function f1() {
        
    }
    
    function f2() {
        
    }
    
    function f3() {
        
    }
    
    return {f1,f2,f3}
})();

let animal={
    name :"aa",
    age : 22
};

let cat = Object.create(animal);
cat.color ='red';

    console.log(Object.getPrototypeOf(cat));


