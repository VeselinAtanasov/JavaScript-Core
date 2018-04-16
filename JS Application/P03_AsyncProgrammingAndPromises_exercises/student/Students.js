class Student{
    constructor(id,firstName,lastName,facultyNumber,grade){
            this.id=id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.facultyNumber = facultyNumber;
            this.grade = grade;
    }
    get id(){
        return this._id;
    }
    set id(value){
        if((value+'').length===0 || !isFinite(value)){
            throw new TypeError ("Invalid value for id!!!")
        }
        this._id=Number(value);
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        if(typeof value !=='string' || value.length ===0){
            throw new TypeError ("Invalid value for First Name!!!")
        }
        this._firstName=value;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        if(typeof value !=='string' || value.length ===0){
            throw new TypeError ("Invalid value for Last Name!!!")
        }
        this._lastName=value;
    }
    get facultyNumber(){
        return this._facultyNumber;
    }
    set facultyNumber(value){
        if(typeof value !=='string' ||value.length ===0 || !isFinite(value) ){
            throw new TypeError ("Invalid value for Faculty NUmber!!!")
        }
        this._facultyNumber=value;
    }
    get grade(){
        return this._grade;
    }
    set grade(value){
        if((value+'').length===0 || !isFinite(value)){
            throw new TypeError ("Invalid value for Grade!!!")
        }
        this._grade=Number(value);
    }

}

module.exports = Student;