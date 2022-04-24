function isPalindrome(string){
    let reversed = '';
    let index = string.length - 1;

    function helper(string){
        if(index < 0) return;
        reversed = reversed.concat(string[index]);
        index--;
        helper(string);
    }
    helper(string);
    return reversed === string ? true : false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false