function getAbsSum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += Math.abs(arr[i]);  // absolute value add karo
    }
  
    return sum;
  }
  
  // Test cases
  console.log(getAbsSum([2, -1, 4, 8, 10]));       // Output: 25
  console.log(getAbsSum([-3, -4, -10, -2, -3]));   // Output: 22
  console.log(getAbsSum([2, 4, 6, 8, 10]));        // Output: 30
  console.log(getAbsSum([-1]));                   // Output: 1
  