
let rgbToHexColor = require('./rgb').rgbToHexColor;
let expect = require('chai').expect;

console.log(rgbToHexColor(255, 255, 255));

describe("RGB Tests",function () {
    describe("Test Happy Case",function () {
        it("Should return #FFFFFF",function () {
            //Arrange :
            let expected = '#FFFFFF';
            //Act:
            let actual=rgbToHexColor(255,255,255);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should return #000000",function () {
            //Arrange :
            let expected = '#000000';
            //Act:
            let actual=rgbToHexColor(0,0,0);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should return leadingZer0",function () {
            //Arrange :
            let expected = '#0C0D0E';
            //Act:
            let actual=rgbToHexColor(12, 13, 14);
            //Assert:
            expect(actual).to.equal(expected)
        });
        it("Should return correct result",function () {
            expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA')
        })
    });

    describe("Test Fail Cases",function () {
        it("Should return undefined",function () {
            expect(rgbToHexColor(-1,0,0)).to.equal(undefined)
        });
        it("Should return undefined",function () {
            expect(rgbToHexColor(0,-1,0)).to.equal(undefined)
        });
        it("Should return undefined",function () {
            expect(rgbToHexColor(0,0,-1)).to.equal(undefined)
        });
        it("Should return undefined with color more than 255",function () {
            expect(rgbToHexColor(0,0,256)).to.equal(undefined)
        });
        it("Should return undefined with color more than 255",function () {
            expect(rgbToHexColor(0,256,0)).to.equal(undefined)
        });
        it("Should return undefined with color more than 255",function () {
            expect(rgbToHexColor(256,0,0)).to.equal(undefined)
        });
        it("Should return undefined with double numbers",function () {
            expect(rgbToHexColor(3.14,0,0)).to.equal(undefined)
        });
        it("Should return undefined with double numbers",function () {
            expect(rgbToHexColor(0,3.14,0)).to.equal(undefined)
        });
        it("Should return undefined with double numbers",function () {
            expect(rgbToHexColor(0,0,3.14)).to.equal(undefined)
        });
        it("Should return undefined for different type of arguments",function () {
            expect(rgbToHexColor("5", [3], {8:9})).to.equal(undefined)
        });
        it("Should return undefined when no arguments",function () {
            expect(rgbToHexColor( )).to.equal(undefined)
        })
    })
});