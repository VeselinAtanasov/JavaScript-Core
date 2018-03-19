
class Person{
    constructor(name,email,saying){
        if(new.target === Person){  // this is the way we achive abstraction in js
            throw  new Error ('Can not instantiate ABSTRACT class Person!!')
        }
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

let person= new Person("","",""); // here our Error is thrown
let teacher = new Teacher("","",""); // no Error here - works fine