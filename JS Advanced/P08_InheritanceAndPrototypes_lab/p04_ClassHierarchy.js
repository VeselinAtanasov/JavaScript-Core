function solve() {
    "use strict";


    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError("Can not create instance of this Class!!")
            }
        }

        toString() {
            let type = this.constructor.name;
            return `${type} - `;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        toString() {
            return super.toString() + `radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }

        toString() {
            return super.toString() + `width: ${this.width}, height: ${this.height}`;
        }
    }
    return {
        Rectangle,
        Circle,
        Figure
    }
}
let r = new Rectangle(5, 3);
console.log(r.toString());
let c = new Circle(4);
console.log(c.toString())