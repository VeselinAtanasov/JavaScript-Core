function solve() {

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
    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let result = super.toString().slice(0, -1);
            return result + `, subject: ${this.subject})`
        }
    }
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let result = super.toString().slice(0, -1);
            return result + `, course: ${this.course})`
        }
    }
    return {
        Teacher,
        Student,
        Person
    }
}
let Student=solve().Student
let Teacher=solve().Teacher
//let stu = new Student("vesko", "12332@121", "js");
let stu2 = new Teacher("vesko", "12332@121", "js");
console.log(stu2.toString());
