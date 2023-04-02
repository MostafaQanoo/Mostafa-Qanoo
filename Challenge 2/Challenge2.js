
  function findMissingNumber(nums) {
    const n = nums.length;
    let sum = 0;
    let expectedSum = (n * (n + 1)) / 2;
  
    for (let i = 0; i < n; i++) {
      sum += nums[i];
    }
  
    return expectedSum - sum;
  }
  
console.log(findMissingNumber([3, 0, 1])); // Expected output: 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Expected output: 8
console.log(findMissingNumber([0, 1])); // Expected output: 2
