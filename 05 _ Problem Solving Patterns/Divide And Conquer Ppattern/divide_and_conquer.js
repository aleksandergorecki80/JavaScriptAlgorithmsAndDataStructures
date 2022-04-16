function seach(array, val){
    let min = 0;
    let max = array.length - 1;

console.log(min, max)

    while(min <= max) {
        let middle = Math.floor((min+max) / 2 );

        if(array[middle] < val){
            min = middle + 1;
        } else if ( array[middle] > val ){
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

// console.log(seach([3,5,6,8,9,12,13,15,19,22,25,27,29,33,35,38,45,55,56,78], 56))
console.log(seach([3,4,5,6,7,55,66,88], 66))