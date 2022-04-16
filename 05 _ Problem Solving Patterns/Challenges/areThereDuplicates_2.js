// accepts a veriable number of arguments and cheks wheather are any duplicates

function areThereDuplicates(...args){
    if(args.length === 0){
        return false;
    }
    let left = 0;
    let right = args.length - 1;
    while ( left < right ) {
        if ( args[left] === args[right] ){
            return true;
        } else if 

    }
}

console.log(areThereDuplicates(1, 2, 3, 5, 8, 9, 9))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a', 'b','c', 'c'))