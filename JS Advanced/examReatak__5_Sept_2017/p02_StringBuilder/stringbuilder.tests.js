
StringBuilder = require('./stringBuilder').StringBuilder;
expect = require('chai').expect;

describe("Test StringBuilder class", function () {
    let stringBuilder;
    beforeEach(function () {
        stringBuilder = new StringBuilder('myString');
    });
    let fakeStringBuilder;
    beforeEach(function () {
        fakeStringBuilder = new StringBuilder();
    });
    it('Checks the number of properties in the cosntructor',function () {
        let result = Object.keys(stringBuilder);
        expect(result.length).to.equal(1);
    });
    it('has functions attached to prototype', function () {
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('append')).to.equal(true, "Missing append function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('prepend')).to.equal(true, "Missing prepend function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('insertAt')).to.equal(true, "Missing insertAt function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('remove')).to.equal(true, "Missing remove function");
        expect(Object.getPrototypeOf(stringBuilder).hasOwnProperty('toString')).to.equal(true, "Missing toString function");
    });
    it("Checks tht can be instantiated with incomming string",function () {
        expect(stringBuilder._stringArray.length).to.equal(8)
    });
    it("Checks tht can be instantiated with no params",function () {
        expect(fakeStringBuilder._stringArray.length).to.equal(0)
    });
    it('Test verifyFunc',function () {
        // let wrongBuilder= new stringBuilder(() => 12)
        expect(() => new stringBuilder(() => 12) ).to.throw(TypeError)
    });
    it("Tests function append",function () {
        stringBuilder.append("123");
        let result=stringBuilder._stringArray.join("")
        expect(result).to.equal('myString123')
    });
    it("Tests function append",function () {

        expect(function () {
            stringBuilder.append(11)
        }).to.throw()
    });
    it("Tests function prepend",function () {
        stringBuilder.prepend("123");
        let result=stringBuilder._stringArray.join("")
        expect(result).to.equal('123myString')
    });
    it("Tests function prepaid to throw",function () {

        expect(function () {
            stringBuilder.prepend(11)
        }).to.throw()
    });
    it('Tests InserFunction',function () {
        fakeStringBuilder.insertAt('HaH',4);
        let result = fakeStringBuilder._stringArray.join("");
        expect(result).to.equal('HaH')
    })
    it('Tests InserFunction to throw ',function () {
        expect(function () {
            stringBuilder.insertAt(11,1)
        }).to.throw()
    })

    it('Tests Remove',function () {
        stringBuilder.remove(2,4);
        let result = stringBuilder._stringArray.join("");
        expect(result).to.equal('myng')
    })
    it('Tests Remove',function () {
        fakeStringBuilder.remove(2,4);
        let result = fakeStringBuilder._stringArray.join("");
        expect(result).to.equal('')
    })
    it('Tests toString',function () {

        let result = stringBuilder.toString();
        expect(result).to.equal('myString')
    })

    it("INSERT FUNCTION",function () {
        stringBuilder.insertAt('44',2);
        let result = stringBuilder._stringArray.join("");
        expect(result).to.equal('my44String')
    })
    it('invalid insertAt parameter', function () {
        let willThrow = () => stringBuilder.insertAt(5, 1);
        expect(willThrow).to.throw();
    });
    it('inserts correctly', function () {
        let str = 'kek';
        stringBuilder.insertAt(str, 3);
        let expected = Array.from('myString');
        expected.splice(3, 0, ...str);
        expect(expected.length).to.equal(11)
    });
});