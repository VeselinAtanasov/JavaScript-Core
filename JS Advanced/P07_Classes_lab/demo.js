
class Rectangle{
    constructor(width=0,height=0,color='white') {
        this.width = width;
        this.height = height;
        this.color = color
    }
    calcArea(){
        return this.width * this.height;
    }
    multiplyPerimeter(num){
        return num*(2*this.width + 2*this.height);
    }
    get getArea (){
        return this.width* this.height
    }
    set setArea(num){
        return this.color="Testing Setter"+ num
    }
}

let rectangle = new Rectangle(5,5,'blue');
let rect2 = new Rectangle(1,4);
let rect23 = new Rectangle(undefined,undefined,'green');
console.log(rectangle);
console.log(rect2);
console.log(rect23);

for (let obj in rectangle) {
    console.log(obj +" => "+ rectangle[obj])
}
console.log("The area is :" + rectangle.getArea);
rectangle.setArea = 11;
console.log(rectangle.color);

rectangle.name="TTT";
console.log(rectangle);
console.log(rectangle.multiplyPerimeter(3));