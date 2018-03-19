const createCalculator = require('./p07_AddSubtract').createCalculator;
const expect = require('chai').expect;

describe("Test AddSubtract Task", function () {
    let calculator;  // Initialize the calc object before every test -> this function will be executed before every test
    beforeEach(function () {
        calculator = createCalculator();
    });

    describe("General Tests", function () {
        it("Should return an object", function () {
            let expected = 'object';
            expect(typeof calculator).to.equal('object')
        });
        it("Check if the object contains functions", function () {
            let expected = 'true';
            let checker = true;
            for (let prop in calculator) {
                if (typeof calculator[prop] !== 'function') {
                    checker = false;
                }
            }
            expect(checker).to.equal(true)
        });
    });
    describe("Happy Case", function () {
        it("check empty obj", function () {
            expect(calculator.get()).to.equal(0)
        });
        it("Test add function", function () {

            calculator.add(4);
            calculator.add(2);
            calculator.add(1);
            expect(calculator.get()).to.equal(7)
        });
        it("Test subtract function", function () {
            calculator.add(4);
            calculator.add(2);
            calculator.add(1);
            calculator.subtract(3);
            expect(calculator.get()).to.equal(4)
        });
        it("Test add function with strings", function () {
            calculator.add('4');
            calculator.add('2');
            calculator.add('1');
            calculator.subtract('3');
            expect(calculator.get()).to.equal(4)
        });
        it("Test subtract function with fractions", function () {
            calculator.add('3.14');
            calculator.subtract(1.13);
            expect(calculator.get()).to.be.closeTo(2.01,0.001)
        });
        it("Test should work with negative numbers", function () {
            calculator.add(-4);
            calculator.subtract(-3);
            expect(calculator.get()).to.be.equal(-1)
        });
        it("It should not add NaN", function () {
            calculator.add('test');
            expect(calculator.get()).to.be.NaN
        });
        it("It should not subtract NaN", function () {
            calculator.subtract('test');
            expect(calculator.get()).to.be.NaN
        });
    })
});