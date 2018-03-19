
const jsdom = require('jsdom-global')();
const $ = require('jQuery');
const sharedObject = require('./shared').sharedObject;
const expect = require('chai').expect;
document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;





describe("Shared Object tests",function () {
    describe("Test General Cases",function () {
        it("Should return null in case of empty name ",function () {
            expect(sharedObject.name).to.be.null;
        });
        it("Should return null in case of empty income ",function () {
            expect(sharedObject.income).to.be.null;
        });
        it("Should return null in case of empty income ",function () {
            expect(sharedObject.income).to.be.null;
        });
        it("Should return string for name ",function () {
           sharedObject.changeName("Test");
            expect(sharedObject.name).to.equal("Test");
        });
        it("Should return number for income ",function () {
            sharedObject.changeIncome(55);
            expect(sharedObject.income).to.equal(55);
        });
    });

});