// Takes in an array of numbers and returns the produt of them

function productOfArray(arr) {
  let result = 1;
  function helper(arr) {
    if (arr.length === 0) return;
    result = result * arr[0];
    return helper(arr.slice(1));
  }
  helper(arr);
  return result;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
console.log(productOfArray([3, 10])); // 30
