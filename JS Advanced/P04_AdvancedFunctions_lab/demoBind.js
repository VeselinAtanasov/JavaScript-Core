
let obj ={
    name :"Kiro",
    age: 21,
    sayHello : function () {
        console.log(this.name +" says Hello")
    }
};
obj.sayHello(); // result: Kiro says Hello

let obj2 = obj.sayHello; // assign the reference to the function sayHello to variable
obj2(); // returns undefined says Hello,i.e this here is not working -> we do not has access to property name

//In order to overcome this issue - > to be able to assign object method to another variable:

let obj3 = obj.sayHello.bind(obj); //  bind(obj) gives access to the inside properties (the obj context):
obj3();  // returns Kiro says Hello


let maria={
    name: "Maria",
    age: 18
};

// If we want Maria to call a function of obj for example sayHello() method :
// apply and call are similar,
obj.sayHello.call(maria); // returns Maria says Hello
obj.sayHello.apply(maria); // returns Maria says Hello
