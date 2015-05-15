var expect = require('chai').expect,
    BlackjackCard = require('../BlackjackCard');

describe('BlackjackCard', function() {
    describe('.isValid(card)', function() {
        describe('Card should only be a string', function() {
            it('should return true when a valid string is entered', function() {
                expect(BlackjackCard.isValid('2C')).to.be.true;
            });
            it('should return false when an invalid type is entered', function() {
                expect(BlackjackCard.isValid(10)).to.be.false;
                expect(BlackjackCard.isValid(true)).to.be.false;
                expect(BlackjackCard.isValid(function() {})).to.be.false;
                expect(BlackjackCard.isValid({})).to.be.false;
            });
        });

        describe('Card value should only be 2-10, \'A\', \'J\', \'Q\' or \'K\'', function() {
            it('should return true when a valid card value is entered', function() {
                expect(BlackjackCard.isValid('2C')).to.be.true;
                expect(BlackjackCard.isValid('9C')).to.be.true;
                expect(BlackjackCard.isValid('10C')).to.be.true;
                expect(BlackjackCard.isValid('AC')).to.be.true;
                expect(BlackjackCard.isValid('JC')).to.be.true;
                expect(BlackjackCard.isValid('QC')).to.be.true;
                expect(BlackjackCard.isValid('KC')).to.be.true;
            });
            it('should return false when an invalid card value is entered', function() {
                expect(BlackjackCard.isValid('0C')).to.be.false;
                expect(BlackjackCard.isValid('1C')).to.be.false;
                expect(BlackjackCard.isValid('1C')).to.be.false;
                expect(BlackjackCard.isValid('FC')).to.be.false;
            });
        });

        describe('Card suit should only be \'C\', \'D\', \'H\' or \'S\'', function() {
            it('should return true when a valid card suit is entered', function() {
                expect(BlackjackCard.isValid('3C')).to.be.true;
                expect(BlackjackCard.isValid('3D')).to.be.true;
                expect(BlackjackCard.isValid('3H')).to.be.true;
                expect(BlackjackCard.isValid('3S')).to.be.true;
            });
            it('should return false when an invalid card suit is entered', function() {
                expect(BlackjackCard.isValid('30')).to.be.false;
                expect(BlackjackCard.isValid('3A')).to.be.false;
                expect(BlackjackCard.isValid('3FOO')).to.be.false;
            });
        });
    });

    describe('.constructor()', function() {
        it('should not throw Error when initialised with a valid card', function() {
            expect(BlackjackCard.bind(BlackjackCard, '2C')).to.not.throw(Error);
        });
        it('should throw Error when initialised with an invalid card', function() {
            expect(BlackjackCard.bind(BlackjackCard, '1C')).to.throw(Error);
        });
    });

    describe('.prototype.getValue(card)', function() {
        it('should return a number for a valid card', function() {
            expect(new BlackjackCard('10C').getValue()).to.be.a('number');
        });
        it('should convert numeric string to number', function() {
            expect(new BlackjackCard('2C').getValue()).to.equal(2);
            expect(new BlackjackCard('9C').getValue()).to.equal(9);
            expect(new BlackjackCard('10C').getValue()).to.equal(10);
        });
        it('should convert \'A\' to 11', function() {
            expect(new BlackjackCard('AC').getValue()).to.equal(11);
        });
        it('should convert \'J\', \'Q\' or \'K\' to 10', function() {
            expect(new BlackjackCard('JC').getValue()).to.equal(10);
            expect(new BlackjackCard('QC').getValue()).to.equal(10);
            expect(new BlackjackCard('KC').getValue()).to.equal(10);
        });
    });
});
