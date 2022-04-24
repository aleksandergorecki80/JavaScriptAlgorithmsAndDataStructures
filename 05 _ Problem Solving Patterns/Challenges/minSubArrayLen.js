console.log('minSubArrayLen')
// This function accepts two parameters - an array of positive integers
// and a positive integer
// The function should return the minimal length of a contigous subarray
// of which the sum is greather than or equal to the integer passed to the function.
// If there isn't one return 0

function minSubArrayLen(arr, num){

    // dodaj od poczatku az suma bedzie wieksza lub ruwna num
    let minSum = 0;
    let index = 0

    while(minSum < num){
        minSum += arr[index]
        index++;
        console.log(`
                        ${arr[index]}, 'arr[index]'
                        ${minSum}, 'minSum',
                        ${num}, 'num'
        `)
    }
    console.log(minSum, 'min sum')
    console.log(index, 'index')
    let stop = index-1;

    console.log(stop, 'stop')
    
    // odejmij pierwszy i dodaj koleiny

    let sumTemp = (minSum - arr[start]) + arr[index]
    console.log(sumTemp, 'sumTemp po odjeciu i dodaniu')

    if(sumTemp >= num && sumTemp<minSum){
        minSum = sumTemp;
    }
    console.log(minSum, ' minSum po przeusunieciu')

}

console.log(minSubArrayLen([2,3,1,5,4,3, 1, 2, 3], 7)) // 2 -> because [4,3] is the smallest subaray