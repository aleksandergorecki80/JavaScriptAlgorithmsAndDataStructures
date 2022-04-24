// The function accepts a number and returns the nth number in the Fibonscci sequence.
// 1,1,2,3,5,8... 
// every number is equal to the sum of the previous two numbers

// my solution
function fib(number){
    let fibArr = [];
    let i = 0;
    function helper(number){
        if(number === 0) return;
        let next = 1;
        if(fibArr.length > 1){
            next = fibArr[i-2] + fibArr[i-1];
        }       
        fibArr.push(next)
        i++;
        helper(number-1)
    }
    helper(number)
    return fibArr[i-1]
}


console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

// Colt Steel's solution
function fib1(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib1(4)) // 3
console.log(fib1(10)) // 55
console.log(fib1(28)) // 317811
console.log(fib1(35)) // 9227465
