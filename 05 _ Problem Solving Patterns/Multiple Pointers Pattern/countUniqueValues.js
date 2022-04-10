function countUniqueValues(arr){
    if(arr.length === 0){
        return arr.length;
    }
    let firstPointer = 0;
    let secondPionter = 1;
    while(secondPionter < arr.length){
        if(arr[firstPointer] !== arr[secondPionter]){
            firstPointer++;
            arr[firstPointer] = arr[secondPionter]
        } 
        secondPionter++;       
    }
    return firstPointer+1
    
};

// console.log(countUniqueValues([1,1,1,1,1,1,1,1,1,1,1,1,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-1,-1,2]));
// console.log(countUniqueValues([1,1,2,3,3,3,5,5,5,12,13,13,13]));