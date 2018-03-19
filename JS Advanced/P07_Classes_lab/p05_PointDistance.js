
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance (point1,point2){
        let dx = point1.x - point2.x;
        let dy = point1.y - point2.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
let p1 = new Point(4,3);
let p2 = new Point(6,-2);
console.log(Point.distance(p1,p2));