function sumOfCubes(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
  }
  
  // Test Cases
  console.log(sumOfCubes([1, 5, 9])); 
  // Output: 855
  // Explanation: 1³ + 5³ + 9³ = 1 + 125 + 729 = 855
  
  console.log(sumOfCubes([3, 4, 5])); 
  // Output: 216
  // Explanation: 3³ + 4³ + 5³ = 27 + 64 + 125 = 216
  
  console.log(sumOfCubes([2])); 
  // Output: 8
  // Explanation: 2³ = 8
  
  console.log(sumOfCubes([])); 
  // Output: 0
  // Explanation: Empty array → return 0
  