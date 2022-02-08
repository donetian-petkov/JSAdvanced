const library = require('./library.js');
const { assert } = require ('chai');
const { describe } = require('mocha');
const { it } = require ('mocha');

describe('library tests', () => {
   describe('calcPriceOfBook function tests', () => {
       //incorrect inputs
       it ('calcPriceOfBook should throw Error when nameOfBook is not string', () => {
           let expected = Error;
           let input = () => library.calcPriceOfBook(5, 5);

           assert.throws(input, expected);
       });

       it ('calcPriceOfBook should throw Error when year is not number', () => {
           let expected = Error;
           let input = () => library.calcPriceOfBook(5, 'test');

           assert.throws(input, expected);
       });

       //correct inputs
       it ('calcPriceOfBook should return price of 20.00 when the book is after 1980', () => {

           let input = library.calcPriceOfBook('Harry Potter', 1999);

           assert( input === `Price of Harry Potter is 20.00`);
       });

       it ('calcPriceOfBook should return price of 10.00 when the book is before 1980', () => {

           let input = library.calcPriceOfBook('Harry Potter', 1979);

           assert( input === `Price of Harry Potter is 10.00`);
       });

       it ('calcPriceOfBook should return price of 10.00 when the book is from 1980', () => {

           let input = library.calcPriceOfBook('Harry Potter', 1980);

           assert( input === `Price of Harry Potter is 10.00`);
       });

   });

   describe('findBook function tests', () => {

       //incorrect input
       it ('findBook should throw Error when the length of the booksArr array is zero', () => {
           let expected = Error;
           let input = () => library.findBook([], 'test');

           assert.throws(input, expected);
       });

       //correct input
       it ('findBook should return book not found when we specify non-existent in the library book', () => {
           let input = library.findBook(["Troy", "Life Style", "Torronto"],'Test');
           let expected = `The book you are looking for is not here!`;

           assert(input === expected);

       });

       it ('findBook should return book found when we specify existent in the library book', () => {
           let input = library.findBook(["Troy", "Life Style", "Torronto"],'Troy');
           let expected = `We found the book you want.`;

           assert(input === expected);

       });

   });

   describe('arrangeTheBooks function tests', () => {

       //incorrect input
       it ('arrangeTheBooks should throw Error when the countBooks is not number', () => {
           let expected = Error;
           let input = () => library.arrangeTheBooks('test');

           assert.throws(input, expected);
       });

       it ('arrangeTheBooks should throw Error when the countBooks is a negative number', () => {
           let expected = Error;
           let input = () => library.arrangeTheBooks(-1);

           assert.throws(input, expected);
       });

       //correct input
       it ('arrangeTheBooks should return books are arranged if the books can be set on the available shelves', () => {
           let input = library.arrangeTheBooks(8);
           let expected = `Great job, the books are arranged.`;

           assert(input === expected);

       });

       it ('arrangeTheBooks should return books are not arranged if the books can not be set on the available shelves', () => {
           let input = library.arrangeTheBooks(400);
           let expected = `Insufficient space, more shelves need to be purchased.`;

           assert(input === expected);

       });

       it ('arrangeTheBooks should return books are arranged if the books are fully occupying the shelves', () => {
           let input = library.arrangeTheBooks(40);
           let expected = `Great job, the books are arranged.`;

           assert(input === expected);

       });


   });
});