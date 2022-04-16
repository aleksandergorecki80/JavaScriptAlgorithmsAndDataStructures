// function takes two strings and checks wheater the characters
//in the first string form a subsequence of the characters in the second string.
//In other words, the function should check wheater the characters in the first string appears
// somewhere in the second string, without their order changing


function isSubsequence(firstStr, secondStr){
    let firstPointer = 0;
    let secondPointer = 0;
    
let checkout = '';
    while(secondPointer < secondStr.length){
        if(firstStr[firstPointer] === secondStr[secondPointer]){
            checkout+=secondStr[secondPointer];
            firstPointer++;
            secondPointer++;
        } else {
            secondPointer++;
        }
    }
    return checkout === firstStr ? true : false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));