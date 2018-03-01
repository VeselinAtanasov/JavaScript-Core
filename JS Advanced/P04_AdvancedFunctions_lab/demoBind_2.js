let maria = {
    name: "Maria",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
};
let ivan = { name: 'Ivan' };
// bind returns function which is attached to the context(saved in variables) and we can call it multiple time without giving a context
//and it is not needed to say call(ivan) every time when want to use the function
let helloIvan = maria.hello.bind(ivan);
maria.hello("world"); // Maria says hello world
helloIvan("from me"); // Ivan says hello from me
