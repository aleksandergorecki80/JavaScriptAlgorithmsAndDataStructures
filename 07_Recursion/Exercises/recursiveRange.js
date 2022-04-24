// The function accepts a number and adds up all the numbers from 0 to the number passed on

function recursiveRange(number){
   if(number === 0) return 0;
   return number + recursiveRange(number-1);
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 
