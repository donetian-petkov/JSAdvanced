const lookupChar = require('./Task3.js');
const { assert } = require ('chai');
const { describe } = require ('mocha');
const { it } = require ('mocha');

const { expect } = require ('chai');

describe ('lookupChar function tests', () => {

    it('return char at index', () => {
        assert(lookupChar('Test', 1) === 'e');
    });

    it('return char at index', () => {
        assert(lookupChar('T', 0) === 'T');
    });

    it('return incorrect index if index is larger than length of string', () => {
        assert(lookupChar('Test', 10) === 'Incorrect index');
    });

    it('return incorrect index if index is negative number', () => {
        assert(lookupChar('Test', -1) === 'Incorrect index');
    });

    it('return incorrect index if input string is empty', () => {
        assert(lookupChar('', 0) === 'Incorrect index');
    });

    it('return undefined if first parameter is not string', () => {
        assert(lookupChar(100, 10) === undefined);
    });

    it('return undefined if first parameter is string and the second parameter is decimal', () => {
        assert(lookupChar('Test', 10.5) === undefined);
    });

    it('return undefined if the wrong types parameter are provided', () => {
        assert(lookupChar(100, '105') === undefined);
    });

});
