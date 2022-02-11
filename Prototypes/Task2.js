(function solve() {

    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this;
        } else {
            return `${str}${this}`;
        }
    }

    String.prototype.ensureEnd = function(str) {
        if (this.endsWith(str)) {
            return this.toString();
        } else {
            return `${this}${str}`;
        }
    }

    String.prototype.isEmpty = function() {
        return this.length === 0;
    }

    String.prototype.truncate = function(n) {

        if (n < 4 ){
            return '.'.repeat(n);
        } else if (this.indexOf(' ') < 0){
            return this.substring(0,n-3) + '...';
        } else if (this.length < n) {
            return this.toString();
        } else if (this.length > n) {
            let lastIndex = this.toString().substring(0, n-2).lastIndexOf(' ');
            return this.toString().substring(0,lastIndex)+ '...';
        }
    }

    String.format = function(str, ...params){

        for (let i = 0 ; i < params.length; i++) {
            str = str.replace(`{${i}}`,params[i]);
        }

        return str;
    }

}) ()

let str = 'my string';

str = str.ensureStart('my');

console.log(str);

str = str.ensureStart('hello ');

console.log(str);

str = str.truncate(16);

console.log(str);

str = str.truncate(14);

console.log(str);

str = str.truncate(8);

console.log(str);

str = str.truncate(4);

console.log(str);

str = str.truncate(2);

console.log(str);

str = String.format('The {0} {1} fox',

    'quick', 'brown');

console.log(str);

str = String.format('jumps {0} {1}',

    'dog');

console.log(str);
