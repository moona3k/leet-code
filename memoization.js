// fibonacci sequence runtime: exponential

const fib = (n, memo = {}) => {
    if (n === 1) return 1;
    if (n === 2) return 1;
    if (n in memo) return memo[n];

    result = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = result;
    return result;
}

// 1, 1, 2, 3, 5, 8, 13, 21

console.log(fib(6))
console.log(fib(7))
console.log(fib(40))
console.log(fib(41))