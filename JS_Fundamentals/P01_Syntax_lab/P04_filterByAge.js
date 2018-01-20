
function filterByName() {
    let person1={};
    let person2={};
    let incomingAge=arguments[0];
    person1.name=arguments[1];
    person1.age=arguments[2];
    person2.name=arguments[3];
    person2.age=arguments[4];

    if(person1.age>=incomingAge){
        console.log(person1);
    }
    if(person2.age>=incomingAge){
        console.log(person2);
    }
}

filterByName(12, 'Ivan', 15, 'Asen', 9)