
function personalBMI(name,age,weight,height) {
    age=Number(age);
    weight=Number(weight);
    height=Number(height);

    let person={
        name : name,
        personalInfo :{
            age:age,
            weight:weight,
            height:height
        },
        BMI: calculateBMI()
    };
    person['status']=getStatus(person['BMI']);
    if(person['status']==='obese'){
        person['recommendation']='admission required';
    }

function calculateBMI() {
    return Math.round((weight / ((height / 100) * (height / 100))));
}
function getStatus(bmi) {
    if(bmi<18.5){
        return "underweight";
    }else if(bmi<25){
        return "normal";
    }else if(bmi<30){
        return "overweight";
    }else if(bmi>=30){
        return "obese";
    }
}
return person
}

//console.log(personalBMI('Peter', 29, 75, 182));
 console.log(personalBMI('Honey Boo Boo', 9, 57, 137));