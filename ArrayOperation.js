function arrayOperation(x, y, n) {
    let result = [];
    for (let i = x; i <= y; i++) {
      if (i % n === 0) {
        result.push(i);
      }
    }
    return result;
  }
  
  // ✅ Sample Test Cases
  console.log(arrayOperation(1, 10, 3));  // Output: [3, 6, 9]
  console.log(arrayOperation(7, 9, 2));   // Output: [8]
  console.log(arrayOperation(15, 20, 7)); // Output: []
  