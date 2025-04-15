function uniqueSort(arr) {
    let unique = [];
  
    // Step 1: Remove duplicates
    for (let i = 0; i < arr.length; i++) {
      let alreadyIn = false;
  
      for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
          alreadyIn = true;
          break;
        }
      }
  
      if (!alreadyIn) {
        unique[unique.length] = arr[i];
      }
    }
  
    // Step 2: Sort in ascending order (using simple bubble sort)
    for (let i = 0; i < unique.length; i++) {
      for (let j = i + 1; j < unique.length; j++) {
        if (unique[i] > unique[j]) {
          let temp = unique[i];
          unique[i] = unique[j];
          unique[j] = temp;
        }
      }
    }
  
    return unique;
  }
console.log(uniqueSort([1, 2, 3, 4,5,5])); // ➝ [1, 2, 3, 4, 5]
console.log(uniqueSort([1, 2, 3,2,1,4])); // ➝ [1, 2, 3, 4]  