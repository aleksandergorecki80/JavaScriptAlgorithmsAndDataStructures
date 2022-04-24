// Given an array of strings capitalize the first letter of each string in the array

function capitalizeFirst(arr) {
    let newArr = [];
    function helper(arr){
        if(arr.length === 0) return;
        newArr.push(`${arr[0][0].toUpperCase()}${arr[0].slice(1)}`)
        return helper(arr.slice(1))
    }
    helper(arr)
    return newArr;
  }
  
console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  