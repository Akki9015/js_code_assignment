function sortNumsAscending(arr) {
    // null, undefined, ya empty array check
    if (!arr || arr.length === 0) {
      return [];
    }
  
    // sort in ascending order
    return arr.sort((a, b) => a - b);
  }
  
  // Test cases
  console.log(sortNumsAscending([1, 2, 10, 50, 5]));           
  console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));   
  console.log(sortNumsAscending(null));                       
  console.log(sortNumsAscending([]));                          
  