let isOddOrEven = require('./p02_EvenOrOdd').isOddOrEven;
let expect = require('chai').expect;

describe("Test Even Or Odd function",function () {
   it("Should return even for ('aaaaaa')",function () {
       //Arrange :
       let expected = 'even';
       //Act :
       let actual = isOddOrEven('aaaaaa');
       //Assert :
       expect(actual).to.equal(expected)
   });
    it("Should return odd for ('aaaaa')",function () {
        //Arrange :
        let expected = 'odd';
        //Act :
        let actual = isOddOrEven('aaaaa');
        //Assert :
        expect(actual).to.equal(expected)
    });
    it("Should return undefined for (55)",function () {
        expect(isOddOrEven(55)).to.be.undefined
    })
});
