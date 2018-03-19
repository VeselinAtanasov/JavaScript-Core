

//How to validate params in the constructor:
class Circle{
    constructor(radius){
        this._radius = radius;
    }
    set radius(radius){
        if(radius<0){
            throw new Error("Radius can not be negative")
        }
    }
    get diameter(){
        return 2* this._radius;
    }
    set diameter(diametar){
        return this.radius =diametar/2;
    }
    get area(){
     return   Math.PI * this._radius * this._radius;
    }
}

let circle = new Circle(10);
circle.radius=-4;
console.log(circle.radius)

console.log();

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
