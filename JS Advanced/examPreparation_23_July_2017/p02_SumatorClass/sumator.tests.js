Sumator = require('./sumator').Sumator;
expect = require('chai').expect;

describe("Test Sumator class", function () {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });
    it('Checks if function is attached to prototype',function () {
        expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true) // Check th class not the instance
    });
    it("Checks for property data that is initialize to emty array", function () {
        expect(sumator.data.length).to.equal(0)
    });
    it("Checks for adding data successful", function () {
        sumator.add(11);
        sumator.add('test');
        sumator.add(new Date());
        expect(sumator.data.length).to.equal(3)
    });
    it("Checks function sum", function () {
        sumator.add(11);
        sumator.add(1);
        sumator.add("test");
        sumator.add('1');
        expect(sumator.sumNums()).to.equal(12);
    });
    it("Checks function sum and return zero", function () {
        sumator.add("test");
        sumator.add('1');
        expect(sumator.sumNums()).to.equal(0);
    });
    it("Test Filter function by regex", function () {

        let func = function (x) {
            let regex = /^[0-9]+/;
            return regex.test(x)
        };
        sumator.add(11);
        sumator.add('11');
        sumator.add('32');
        sumator.add("test");
        sumator.add("not a digit");
        sumator.removeByFilter(func);
        expect(sumator.data.length).to.equal(2)
    });
    it("Test Filter function by regex", function () {

        let func = function (x) {
           return typeof x !== 'number';
        };
        sumator.add(11);
        sumator.add('11');
        sumator.add('32');
        sumator.add("test");
        sumator.add("not a digit");
        sumator.removeByFilter(func);
        expect(sumator.data.length).to.equal(1)
    });
    it("Test toString function",function () {
        sumator.add('This');
        sumator.add('Test');
        sumator.add('Should');
        sumator.add(1);
        sumator.add('work');
        let res = sumator.toString();
        expect(res).to.equal('This, Test, Should, 1, work')
    });
    it("Test toString function and retyrn empty",function () {
        let res = sumator.toString();
        expect(res).to.equal('(empty)')
    });
    it("Check if the class is correctly created",function () {
        let props =Object.keys(sumator).length;
        expect(props).to.equal(1);
    });
    it('Checks is expetion iiis thrown',function () {
        for (let i = 0; i <=5; i++) {
           sumator.add(i);
        }
        expect(function () {
            sumator.removeByFilter(undefined)
        }).to.throw();
      //  expect( () => sumator.removeByFilter(undefined)).to.throw()
    })
});