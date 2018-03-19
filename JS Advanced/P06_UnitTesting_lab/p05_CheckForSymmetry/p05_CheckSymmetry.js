let isSymmetric =require('./symmetry').isSymmetric;

let expect = require('chai').expect;

describe("Test Symmetriy", function () {
    describe("Group 2 General Tests",function () {
        it("Should be a function",function () {
            expect(typeof isSymmetric).to.equal('function')
        })
    });
    describe("Group 1 - Test Happy Case",function () {
        it("Should work with odd length",function () {
            //Arrange:
            let expected =true;
            //Act:
            let actual =isSymmetric([1,2,3,3,2,1]);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should work with even length",function () {
            //Arrange:
            let expected =true;
            //Act:
            let actual =isSymmetric([1,1,1,1]);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should work with one element",function () {
            //Arrange:
            let expected =true;
            //Act:
            let actual =isSymmetric([1]);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should work with negative",function () {
            expect(isSymmetric([-1,2,-1] )).to.equal(true)
        })


    });
    describe("Group 2 - Unhappy Case",function () {
        it("Test with string, not an array",function () {
            //Arrange
            let expected = false;
            //Act :
            let actual = isSymmetric('Pesho');
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should work with odd length",function () {
            //Arrange:
            let expected =false;
            //Act:
            let actual =isSymmetric([1,1,2,3,3]);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should work with even length",function () {
            //Arrange:
            let expected =false;
            //Act:
            let actual =isSymmetric([1,1,2,1]);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should work with even length",function () {
            //Arrange:
            let expected =false;
            //Act:
            let actual =isSymmetric(['1',1,2,1]);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5] ",function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5] )).to.equal(false)
        });
        it("Should return false for [-1,2,1] ",function () {
            expect(isSymmetric([-1,2,1] )).to.equal(false)
        });
        it("Should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] ",function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.equal(true)
        })


    });
});

