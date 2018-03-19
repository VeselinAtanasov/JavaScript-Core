Console = require('./c#console').Console;
expect = require('chai').expect;

describe("Testing C# Console", function () {
    describe("Test writeLine", function () {
        it("Should return the string itself", function () {
            //Arrange:
            let expected = "String!";
            //Act:
            let actual = Console.writeLine('String!');
            //Assert:
            expect(actual).to.equal(expected);
        });
        it("Should return the object as string", function () {
            //Arrange:
            let obj = {name: 'veselin', age: 27};
            //Act:
            let actual = Console.writeLine(obj);
            //Assert:
            expect(actual).to.equal(JSON.stringify(obj));
        });

        it("Should throw a TypeError", function () {
            expect(() => Console.writeLine({obj: 'error'}, 'wrong argument')).to.throw(TypeError);
        });
        it("Should throw a TypeError", function () {
            expect(function () {
                Console.writeLine({obj: 'error'}, 'wrong argument')
            }).to.throw(TypeError);
        });
        it("Should throw a RangeError Incorrect params given", function () {
            expect(function () {
                Console.writeLine('here is {1} the string {2}',"myParams")
            }).to.throw(RangeError)
        });
        it("Should throw Incorrect placeholders given!", function () {
            expect(function () {
                Console.writeLine('here is {1} the string {2}',"myParams", "ha")
            }).to.throw(RangeError)
        });
        it("Should work fine", function () {
            expect( Console.writeLine('here is {0} the string {1}',"myParams", "ha")).to.equal('here is myParams the string ha')
        });
        it("Should throw Incorrect placeholders given!", function () {
            expect(function () {
                Console.writeLine('here is {0} the string {"1"}',"myParams", "ha")
            }).to.throw(RangeError)
        });
        it("should support more than 10 placeholders and parameters passed", function(){
            expect(Console.writeLine('{0} {1} {2} {3} {4} {5} {6} {7} {8} {9} {10}!'
                ,'1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'))
                .to.equal('1 2 3 4 5 6 7 8 9 10 11!');
        });
    });
});