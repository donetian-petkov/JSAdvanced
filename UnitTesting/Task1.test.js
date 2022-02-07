const sumOfTwoNumbers = require('./Task1.js');
const { assert } = require ('chai');
const { describe } = require ('mocha');
const { it } = require ('mocha');

describe('sumOfTwoNumbers function test', () => {

    it ('test with two numbers', () => {
      assert.equal(sumOfTwoNumbers(3,4),7);
    });

    it ('test with string and number', () => {
        assert.equal(sumOfTwoNumbers('3',4),7);
    });
})
