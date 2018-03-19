PaymentPackage = require('./Payment').PaymentPackage;
expect = require('chai').expect;

describe("Test PaymentPAckage Class", function () {
    describe("Checking if this is a valid instantiated class", function () {
        it("Checks cosntructor params", function () {
            let pay = new PaymentPackage('PAY_NOW', 1200);
            expect(pay._name).to.equal('PAY_NOW');
            expect(pay._value).to.equal(1200);
            expect(pay._VAT).to.equal(20);
            expect(pay._active).to.equal(true);
        })
        it("Checks cosntructor params", function () {
            expect(() => new PaymentPackage('PAY_NOW')).to.throw(Error);

        })

    });
    describe("Checking accessor name", function () {
        let PayNow;
        beforeEach(function () {
            PayNow = new PaymentPackage('PAY_METHOD', 1200);
        });
        it("Tests name accessor", function () {
            expect(PayNow.name).to.equal('PAY_METHOD');
            expect(PayNow.name).to.equal(PayNow._name);
        });
        it("Tests name accessor with empty name for throwing ", function () {
            // let newPay= new PaymentPackage('',123)
            expect(() => {
                let newPay = new PaymentPackage('', 123)
            }).to.throw();
        })
        it("Tests name accessor with non-string name for throwing ", function () {
            // let newPay= new PaymentPackage('',123)
            expect(() => {
                let newPay = new PaymentPackage(44, 123)
            }).to.throw();
        });
        it("Tests name accessor with correct values ", function () {
            let newPay = new PaymentPackage('Test', 123)
            expect(newPay.name).to.eq('Test')
        })
        it("Tests setting name accessor with correct values ", function () {
            let newPay = new PaymentPackage('Test', 123)
            expect(newPay.name = "Veselin").to.eq('Veselin')
        })
    });

    describe("TEsting value accessor", function () {
        let paying;
        beforeEach(function () {
            paying = new PaymentPackage('PAY_METHOD', 1200);
        });
        it("Test Setting wrong value", function () {
            expect(() => {
                let temp = new PaymentPackage('name', "11")
            }).to.throw(Error);
        });
        it("Test Setting wrong value", function () {
            expect(() => {
                let temp = new PaymentPackage('name', -1)
            }).to.throw(Error);
        });
        it("Test Setting value to 0", function () {
            let temp = new PaymentPackage('name', 0)
            expect(temp.value).to.equal(0)
        });
        it("Test Setting value to 0", function () {
            let temp = new PaymentPackage('name', 10.0)
            expect(temp.value).to.equal(10.0)
        });
    });

    describe("Test VAT setter and getter", function () {
        let paying;
        beforeEach(function () {
            paying = new PaymentPackage('PAY_METHOD', 1200);
        });

        it("test VAT with negative", function () {
            expect(() => {
                "use strict";
                paying.VAT = -1;
            }).to.throw(Error)
        });
        it("test VAT with negative", function () {
            expect(() => {
                "use strict";
                paying.VAT = '1';
            }).to.throw(Error)
        });
        it("test VAT with negative", function () {
            expect(paying.VAT = 0).to.equal(0)
        });
        it("test VAT with negative", function () {
            expect(paying.VAT = 10).to.equal(10)
        });

    });

    describe("Test toString()", function () {
        let paying;
        beforeEach(function () {
            paying = new PaymentPackage('PAY_METHOD', 1200);
        });
        it("Test isActive", function () {
            expect(() => {
                "use strict";
                paying.active = 'true';
            }).to.throw(Error)
        });
        it("Test isActive", function () {
        expect(paying.active =true).to.equal(true)
        });
        it("Tests to String ",function () {
            paying.active=false;
            expect(paying.toString().includes('(inactive)')).to.equal(true)
        })
        it("To string workk",function () {
            const packages = [
                new PaymentPackage('HR Services', 1500),
                new PaymentPackage('Consultation', 800),
                new PaymentPackage('Partnership Fee', 7000),
            ];
            expect(packages.join('\n')).to.equal("Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800\nPackage: Consultation\n- Value (excl. VAT): 800\n- Value (VAT 20%): 960\nPackage: Partnership Fee\n- Value (excl. VAT): 7000\n- Value (VAT 20%): 8400")

        })
    })
})
