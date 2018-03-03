function orderRectangles(rectangles) {

    function modifyRecord(arr) {
        let rectangle = {
            width: Number(arr[0]),
            height: Number(arr[1]),
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (rect) {
                if (rect.area() === this.area()) {
                    return rect.width - this.width;
                }
                return rect.area() - this.area();
            }
        };
        return rectangle;
    }
    let result = [];
    for (let rectangle of rectangles) {
        result.push(modifyRecord(rectangle));
    }

    return result.sort((a, b) => a.compareTo(b));
}
console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));