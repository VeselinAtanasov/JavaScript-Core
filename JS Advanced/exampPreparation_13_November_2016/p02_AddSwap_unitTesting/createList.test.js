
const createList = require('./unitTesting').createList;
const expect =require('chai').expect;

describe("Test CreateList",function () {
    let list;
    beforeEach(function () {
        list=createList();
    });

    it("Tests addItem",function () {
        list.add(null);
        list.add(11);
        list.add('str');
        list.add({name : 'Veselin',age :29});
        expect(list.toString()).to.equal(', 11, str, [object Object]')

    });
    it("Tests Shiftting",function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.shiftLeft();
        expect(list.toString()).to.equal('2, 3, 4, 1')
    });
    it("Tests Shiftting",function () {
        list.shiftLeft();
        expect(list.toString()).to.equal('')
    });
    it("Tests Shiftting",function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.shiftLeft();
        list.shiftLeft();
        list.shiftLeft();
        expect(list.toString()).to.equal('4, 1, 2, 3')
    });
    it("Tests SiftRight",function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.shiftRight();
        list.shiftRight();
        expect(list.toString()).to.equal('3, 4, 1, 2')
    });
    it("Tests SiftRight",function () {
        list.shiftRight();
        list.shiftRight();
        expect(list.toString()).to.equal('')
    });

    describe("Test Swap method",function () {
        it('first index negative',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(-1,2);
            expect(a).to.equal(false);
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        });
        it('first index == length',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(4,2);
            expect(a).to.equal(false);
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        });
        it('first index non integre',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap('1',2);
            expect(a).to.equal(false);
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })
        it('first index =0',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(0,2);
            expect(a).to.equal(true);
            expect(list.toString()).to.equal('5, gosho, pesho, 6')
        })

        //second:

        it('first index negative',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(1,-2);
            expect(a).to.equal(false);
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        });
        it('first index == length',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(2,4);
            expect(a).to.equal(false);
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        });
        it('first index non integre',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(1,'2');
            expect(a).to.equal(false);
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })
        it('first index =0',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(2,0);
            expect(a).to.equal(true);
            expect(list.toString()).to.equal('5, gosho, pesho, 6')
        })

        it('equalindexes',function () {
            list.add('pesho')
            list.add('gosho');
            list.add(5);
            list.add(6);
            let a =list.swap(1,1);
            expect(a).to.equal(false);
            expect(list.toString()).to.equal('pesho, gosho, 5, 6')
        })
    })
});