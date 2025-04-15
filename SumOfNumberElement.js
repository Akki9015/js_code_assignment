function numbersSum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
      }
    }
  
    return sum;
  }
console.log(numbersSum([1, 2, "13", "4", "645"])); 
console.log(numbersSum([true, false, "123", "75"]));  