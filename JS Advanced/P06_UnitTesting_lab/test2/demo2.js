function sum(arr) {
    let sum =0;
    for (let i = 0; i < arr.length; i++)
        sum += Number(arr[i]);
    return sum;
}

let expect = require('chai').expect ;

describe("Test sumator", function () {
    describe("Group1",function () {
        it("Should return 3 for [1,2]", function () {
            //Arrange
            let expected = 3;
            //Act
            let actual = sum([1, 2]);
            //Assert   // Assertion without chai
            expect(actual).to.equal(expected)
        });
    });

    describe("Group 2",function () {
        it("Should return 0 for []",function () {
            let expected = 0;
            //Act
            let actual = sum([]);
            //Assert
            expect(actual).to.equal(expected);     // Assertion with chai
        });

        it("Should return 3 for ['1',2]",function () {
            //Arrange:
            let expected = 3;
            // Act
            let actual= sum(['1',2]);
            //Assert :
            expect(actual).to.equal(expected)

        })
    });

    it("Should return NaN",function () {
        let expected = NaN;
        //Act
        let actual = sum(['pesho',1]);
        //Assert
      //  expect(actual).to.equal(expected);     // Assertion with chai
        expect(actual).to.be.NaN
    });
    it("Should return 3.03, but returns 3.0000000000000002",function () {
        expect(sum([1.1,1.1,1.1])).to.be.closeTo(3.3,0.000001)
    });

    it("Should work with negative numbers",function () {
        expect(sum([-1,-2,4])).to.equal(1)
    });
    it("Should return Nan",function () {
        expect(sum("peko")).to.be.NaN
    })

    it("Should return 1",function () {
        expect(sum([1])).to.equal(1)
    })
});




