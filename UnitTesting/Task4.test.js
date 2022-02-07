const mathEnforcer = require('./Task4.js');
const { assert } = require ('chai');
const { describe } = require ('mocha');
const { it } = require ('mocha');

describe('mathEnforcer tests', () => {
    describe ('addFive function tests', () => {

        //test with incorrect input
        it ('should return undefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });

        it('Should return undefined with an array', () => {
           assert(mathEnforcer.addFive([]) === undefined);
        });

        it('Should return undefined with an object', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });

        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });

        //tests with correct input
        it('positive number plus 5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });

        it('negative number plus 5', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });

        it('decimal number plus 5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });

    });

    describe('subtractTen function tests', () => {

        //test with incorrect input
        it ('should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });

        it('Should return undefined with an array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });

        it('Should return undefined with an object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });

        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });

        //tests with correct input
        it('positive number minus 10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });

        it('negative number minus 10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15);
        });

        it('decimal number minus 10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });

    });

    describe('sum of two numbers function tests', () => {

        //tests with correct input
        it('Two positive numbers', () => {
            assert(mathEnforcer.sum(10, 20) === 30);
        });

        it('Two negative numbers', () => {
            assert(mathEnforcer.sum(-10, -2.5) === -12.5);
        });

        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(10.5, 2.1) === 12.6);
        });

        //tests with incorrect input
        it('Should return undefined if first parameter is string', () => {
            assert(mathEnforcer.sum('', 2.1) === undefined);
        });

        it('Should return undefined if second parameter is string', () => {
            assert(mathEnforcer.sum(5.6, '') === undefined);
        });

    });

});