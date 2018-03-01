let [a,b,c] =[1,23,3]
Math.max(a,b,c);

Math.max.call(null,a,b,c); // null means reference, i.e. obj but here it is not needed

Math.max.apply(null,[a,b,c]); // Apply can work with array - works fine with many function arguments

console.log(Math.max(5,100,55));
//console.log(Math.max.apply(null,(5,100,55))); // this is not working TypeError: CreateListFromArrayLike called on non-object
console.log(Math.max.apply(null,[5,100,55]));
console.log(Math.max.call(null,5,100,55));


//APPLY and CALL ::
let maria = {
    name: "Maria",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
};
maria.hello("world"); // Maria says hello world

let ivan = {
    name: 'Ivan'
};
maria.hello.call(ivan, "now"); // Ivan says hello now
maria.hello.apply(ivan, ["again"]); // Ivan says hello again
