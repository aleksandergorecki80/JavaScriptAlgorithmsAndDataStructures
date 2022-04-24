console.log('factorial')
// A  function which accepts a number and returns the factorial of that number.
// A factirial is the produt of an integer and all the integers below it;
// e.g (4!) = 24, because 4*3*2*1 equals 24
// factorial zero (0!) = 1


function factorial(number){
   if(number === 0) return 1;
   return number * factorial(number-1);
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040
