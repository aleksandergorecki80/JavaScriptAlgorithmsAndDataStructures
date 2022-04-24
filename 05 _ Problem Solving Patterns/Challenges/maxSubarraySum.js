// maxSubarraySum finds thy maximum sum of a subarra 
// with the length of numbers passed to the function 
// A subarray must consist of consecutive elements from the original array 
// in the first example [100,200,300] is a subarray
// of the original array but [100,300] is not


function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num ) return null;

    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = (tempSum - arr[i -num]) + arr[i];
        if(tempSum>maxSum){
            maxSum = tempSum;
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null