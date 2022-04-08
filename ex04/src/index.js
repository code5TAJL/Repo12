// Only change code below this line
function sumFibonacci(num) {
    var fib0 = 0;
    var fib1 = 1;
    var fibonacciArray = 1;
    var sum = fib0;
    while (fibonacciArray <= num) {
        if (fibonacciArray % 2) {
            sum = sum + fib1;
        }
        fibonacciArray = fib0 + fib1;
        fib1 = fib1 +fib0;
        fib0 = fib1 - fib0;
    }
    return sum;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;

