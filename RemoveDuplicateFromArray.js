function removeDups(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
  
      for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          isDuplicate = true;
          break;
        }
      }
  
      if (!isDuplicate) {
        result[result.length] = arr[i];
      }
    }
  
    return result;
  }
console.log(removeDups(["John", "Taylor", "ravi"])); 
console.log(removeDups(["John", "Taylor", "John"]));  