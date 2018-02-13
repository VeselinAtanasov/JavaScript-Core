
let obj1={
    name : "Test",
    age : 12
};

let obj2={
    name : "HHH",
    age : 12
};

let set = new Set();
set.add(obj1);
set.add(obj2);
console.log([...set].forEach(e => console.log(e)))
obj1.name="Ivan";
console.log([...set].forEach(e => console.log(e)))
