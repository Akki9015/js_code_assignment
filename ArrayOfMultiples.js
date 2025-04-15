function arrayOfMultiples(num, length) {
    const result = [];
    for (let i = 1; i <= length; i++) {
      result.push(num * i);
    }
    return result;
  }
  
  // Test Cases
  console.log( arrayOfMultiples(7, 5));    
  console.log( arrayOfMultiples(12, 10));  
  console.log( arrayOfMultiples(17, 6));   
  