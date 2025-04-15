function maxTotal(numbers) {
    // Step 1: Sort descending
    numbers.sort((a, b) => b - a);
  
    // Step 2: Take first 5 numbers and add them
    return numbers.slice(0, 5).reduce((sum, num) => sum + num, 0);
  }
console.log(maxTotal([1, 2, 3, 4, 5, 6])); // Output: 20  