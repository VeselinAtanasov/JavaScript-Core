let lookupChar = require('./charLookup').lookupChar;
let expect = require('chai').expect;


describe("Char LookUP tests", function () {
    describe("Test Happy Case", function () {
        it("Should return undefined", function () {
            expect(lookupChar(55, 1)).to.be.undefined
        });
        it("Should return undefined", function () {
            expect(lookupChar('str', '1')).to.be.undefined
        });
        it("Should return Incorrent index for (str,-1)", function () {
            expect(lookupChar('str', -1)).to.equal("Incorrect index");
        });
        it("Should return Incorrent index for ('',1)", function () {
            expect(lookupChar('', 1)).to.equal("Incorrect index");
        });
        it("Should return Incorrent index for (str,10)", function () {
            expect(lookupChar('str',  10)).to.equal("Incorrect index");
        });
        it("Should return Incorrent index for (str,-1)", function () {
            expect(lookupChar('str', -1)).to.equal("Incorrect index");
        });
        it("Should return 5 forlookupChar('123456', 4) ",function () {
            expect(lookupChar('123456', 4)).to.equal('5');
        });
        it("Should return undefined forlookupChar('string', 3.14) ",function () {
            expect(lookupChar('string', 3.14)).to.be.undefined;
        })
    });
});