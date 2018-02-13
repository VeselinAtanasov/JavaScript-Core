
let obj={
    name: "Pesho",
    age: 12,
    education: "Engineer"
};

let keys=Object.keys(obj); // returns array of all obj keys;
console.log(keys);
let values =Object.values(obj); // returns array of all abj values;
console .log(values);
obj.add=function (a,b) {
    return a+b;
};
console.log(obj)

let myObj={
    name: "TT",
    age: 12
}

console.log(myObj.age+"");
console.log(JSON.stringify(myObj))
