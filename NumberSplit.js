function numberSplit(num) {
    let left = Math.floor(num / 2);
    let right = Math.ceil(num / 2);
    return [left, right];
  }
  
  // Test cases
  console.log(numberSplit(4));     // [2, 2]
  console.log(numberSplit(10));    // [5, 5]
  console.log(numberSplit(11));    // [5, 6]
  console.log(numberSplit(-9));    // [-5, -4]
  