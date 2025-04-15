// Function to concatenate variable number of arrays
function concat(...arrays) {
    return [].concat(...arrays);
  }
  
  
  console.log( concat([1, 2, 3], [4, 5], [6, 7])); 
 
  
  console.log( concat([1], [2], [3], [4], [5], [6], [7])); 
  
  
  console.log( concat([1, 2], [3, 4])); 
  
  
  console.log( concat([4, 4, 4, 4, 4])); 
  
  