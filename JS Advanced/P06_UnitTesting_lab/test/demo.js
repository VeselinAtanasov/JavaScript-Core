function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += Number(arr[i]);
    return sum;
}

let expect = require('chai').expect ;

describe("Test sumator", function () {
    it("Should return 3 for [1,2]", function () {
        //Arrange
        let expected = 3;
        //Act
        let actual = sum([1, 2]);
        //Assert   // Assertion without chai
        if (expected !== actual) {
            throw new Error ("0 !==[]");
        }
    });

    it("Should return 0 for []",function () {
        let expected = 0;
        //Act
        let actual = sum([]);
        //Assert
        expect(actual).to.equal(expected);     // Assertion with chai
    })
});




