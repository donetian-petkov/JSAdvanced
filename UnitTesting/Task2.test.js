const isOddOrEven = require('./Task2.js');
const { assert } = require ('chai');
const { describe } = require ('mocha');
const { it } = require ('mocha');

describe('isOddOrEven function tests', () => {
    // invalid input
    it('should return undefined if parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });

    it('should return undefined if parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });

    it('should return undefined if parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });

    it('should return undefined if parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });

    it('should return undefined if parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });

    //valid input

    it('should return even', () => {
        assert.equal(isOddOrEven('test'), 'even');
    });

    it('should return odd', () => {
        assert.equal(isOddOrEven('tests'), 'odd');
    });

});