
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

let person = new Person("Ivan","abv@bg",'hi there');
let teacher = new Teacher("Petkop","softuni@bg",'learning Js',"History");
// console.log(person);
// console.log(teacher);
console.log(person.toString());
console.log(teacher.toString());
person.talk();
console.log(teacher.talk());
console.log(teacher.exclaim());