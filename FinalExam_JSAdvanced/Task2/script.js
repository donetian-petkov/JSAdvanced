class LibraryCollection {

    constructor(capacity) {

        this.capacity = Number(capacity);
        this.books = [];
        this.emptySlots = this.capacity;
    }

    addBook(bookName, bookAuthor){

        if (this.emptySlots < 1) {
            throw new Error(`Not enough space in the collection.`);
        }

        let book = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        }

        this.emptySlots--;

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;

    }

    payBook(bookName){

       if(this.books.find(book => book.bookName === bookName) === undefined){
           throw new Error(`${bookName} is not in the collection.`);
       }

        if (this.books.find(book => book.bookName === bookName).payed){
            throw new Error(`${bookName} has already been paid.`);
        }

        this.books.find(book => book.bookName === bookName).payed = true;

        return `${bookName} has been successfully paid.`;

    }

    removeBook(bookName) {
        if (this.books.find(book => book.bookName === bookName) === undefined){
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if(!this.books.find(book => book.bookName === bookName).payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.findIndex(book => book.bookName === bookName);

        this.books.splice(index,1);

        this.emptySlots++;

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){

        if (arguments.length===0){
            let text = '';

            text+=`The book collection has ${this.emptySlots} empty spots left.\n`;


            this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));

            for (let book of this.books){
                text+=`${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}.\n`;
            }

            return text.trim();

        } else {
            if (this.books.findIndex(book => book.bookAuthor === bookAuthor) < 0) {
                return `${bookAuthor} is not in the collection.`;
            } else {
                let bookOfAuthor = this.books.find(b => b.bookAuthor === bookAuthor);
                return `${bookOfAuthor.bookName} == ${bookOfAuthor.bookAuthor} - ${bookOfAuthor.payed ? "Has Paid" : "Not Paid"}.`
            }
        }

    }

}

const library = new LibraryCollection(3)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.payBook('In Search of Lost Time');
library.removeBook('In Search of Lost Time');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());





