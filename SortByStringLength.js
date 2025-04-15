function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  // Test Cases
  console.log(sortByLength(["a", "ccc", "dddd", "bb"])); 
  // Output: ["a", "bb", "ccc", "dddd"]
  
  console.log(sortByLength(["apple", "pie", "shortcake"])); 
  // Output: ["pie", "apple", "shortcake"]
  
  console.log(sortByLength(["may", "april", "september", "august"])); 
  // Output: ["may", "april", "august", "september"]
  
  console.log(sortByLength([])); 
  // Output: []
  