function getFibonator() {

    let [a, b] = [0, 1];

    //closure - the a + b are returned with the values set in the inner function during the next execution of the function
    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}

let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
