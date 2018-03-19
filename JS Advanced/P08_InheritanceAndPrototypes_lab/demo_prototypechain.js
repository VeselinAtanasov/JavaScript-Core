
class Person{
    constructor(name,email,saying){
        this.name=name;
        this.email=email;
        this.saying = saying
    }
    talk(){
        return `${this.name} says: ${this.saying}`;
    }
    toString(){
        let className=this.constructor.name;
        return `${className} (name: ${this.name} email:${this.email})`
    }
}

class Teacher extends Person{
    constructor(name, email,saying,subject) {
        super(name, email,saying);
        this.subject=subject;
    }
    exclaim(){
        return super.talk()+"!!!!" ;
    }
    toString(){
        let baseClass=super.toString().slice(0,-1); // to remove the lst ) in the end
        return baseClass+ `, subject :${this.subject})`
    }
}
let  teacher = new Teacher("Stamat",'gmail',"Hi there","History")
console.log(teacher.__proto__);

// Do not use __proto__ the recommended way is:
Object.getPrototypeOf(teacher);
console.log(Object.getPrototypeOf(teacher));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(teacher)));
// console.log(Object.getPrototypeOf(Teacher));
// console.log(Object.getPrototypeOf(Person));

console.log(Object.getPrototypeOf(teacher) === Teacher) // false;
console.log(Object.getPrototypeOf(teacher) === Teacher.prototype) // true;