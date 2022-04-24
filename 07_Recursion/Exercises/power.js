// A function accepts a base and an exponent. 
// The function should return the power of the base to the exponent 

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

console.log(power(3, 4)) // 81
console.log(power(2, 4)) // 16
console.log(power(2, 3)) // 8
