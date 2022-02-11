(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        if (this.length < n || n < 0) {
            return `Invalid index!`;;
        }
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        if (this.length < n || n < 0) {
            return `Invalid index!`;
        }
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce(function (acc, curr) {
            return acc + curr;
        }, 0);
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
}) ()

let array = [1,2,3,4,5,6];

console.log(array.last());

console.log(array.skip(3));

console.log(array.take(3));

console.log(array.sum());

console.log(array.average());

console.log(array.skip(100));

console.log(array.take(-1));

