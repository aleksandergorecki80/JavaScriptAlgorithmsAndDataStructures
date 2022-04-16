// accepts a veriable number of arguments and 
//cheks wheather are any duplicates

function areThereDuplicates(...args){
    if(args.length === 0){
        return false;
    }
    args.sort((a,b) => a > b);
    let firstPointer = 0;
    let secondPionter = 1;
    while(secondPionter < args.length){
        if(args[firstPointer] === args[secondPionter]){
            return true
        } 
        firstPointer++;
        secondPionter++;
    }
    return false;
}

// console.log(areThereDuplicates(1,2,3,4,5,5,6,7))
console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a', 'b','c', 'c'))