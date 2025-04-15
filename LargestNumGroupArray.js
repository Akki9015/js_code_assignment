function getNums(arr) {
    // Check for null or empty array
    if (!arr || arr.length === 0) return [];
  
    // Map through each sub-array and return the max of each
    return arr.map(subArr => Math.max(...subArr));
  }
  
  // Test cases
  console.log(getNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); // Output: [7, 90, 2]
  console.log(getNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // Output: [-34, -2, 7]
  
  