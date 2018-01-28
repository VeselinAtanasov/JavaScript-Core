function employeeData (arr){
    "use strict";
    let pattern=/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 \-]+)$/g;

    for (let data of arr) {
        let matches=pattern.exec(data);

        while (matches){
           console.log(`Name: ${matches[1]}`);
           console.log(`Position: ${matches[3]}`);
           console.log(`Salary: ${matches[2]}`);

            matches=pattern.exec(data);
        }
    }
}

employeeData(['Isacc - 1000 - CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 - Employee'
]);