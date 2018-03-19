
let mathEnforcer = require('./mathEnforcer').mathEnforcer;
let expect = require('chai').expect;


describe("Test Math Enforcer",function () {
    let enforcer="";
    beforeEach(function () {
        enforcer = mathEnforcer;
    });
    describe("Test Add Function",function () {
       it("Check if enforcer is an object",function () {
           expect(typeof enforcer).to.equal('object');
       });
        it("check enforecer properties to be functions",function () {
            let propFunc=true;
            for (let obj in enforcer) {
                if(!typeof enforcer[obj]==='function'){
                    propFunc=false;
                }
            }
            expect(propFunc).to.equal(true);
        });
        it("Should Return undefined for ('str')",function () {
            expect(enforcer.addFive('str')).to.be.undefined;
        });
        it("Should return 10 for (5)",function () {
            expect(enforcer.addFive(5)).to.equal(10)
        });
        it("Should return 0 for (-5)",function () {
            expect(enforcer.addFive(-5)).to.equal(0)
        });
        it("Should return 8.14 for (3.14)",function () {
            expect(enforcer.addFive(3.14)).to.be.closeTo(8.14,0.01)
        });
    });

    describe("Test subtractTen",function () {
        it("Should return undefined for string",function () {
            expect(enforcer.subtractTen('str')).to.be.undefined
        });
        it("Should return -5 for (5)",function () {
            expect(enforcer.subtractTen(5)).to.equal(-5)
        });
        it("Should return -15 for (-5)",function () {
            expect(enforcer.subtractTen(-5)).to.equal(-15)
        });
        it("Should return -15 for (-5)",function () {
            expect(enforcer.subtractTen(-3.14)).to.be.closeTo(-13.14,0.01)
        })
    });

    describe("Test sum Function",function () {
        it("Should return undefined for ('str',5)",function () {
            expect(enforcer.sum('str',5)).to.be.undefined;
        });

        it("Should return undefined for (5,'5')",function () {
            expect(enforcer.sum(5,'5')).to.be.undefined;
        });
        it("Should return 10 for (5,5)",function () {
            expect(enforcer.sum(5,5)).to.equal(10);
        });
        it("Should return -10 for (-5,-5)",function () {
            expect(enforcer.sum(-5,-5)).to.equal(-10);
        });
        it("Should return 10 for (-5,3.14)",function () {
            expect(enforcer.sum(-5,3.14)).to.be.closeTo(-1.86,0.01)
        });
        it("Should return 10 for (5,3.14)",function () {
            expect(enforcer.sum(5,3.14)).to.be.closeTo(8.14,0.01)
        });
        it("Should return 10 for (5,3.14)",function () {
            expect(enforcer.sum(3.14,5)).to.be.closeTo(8.14,0.01)
        });
    })
});