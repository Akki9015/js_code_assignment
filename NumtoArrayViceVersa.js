function toArray(num) {
    return num.toString().split('').map(Number);
  }
  
  function toNumber(arr) {
    return Number(arr.join(''));
  }
console.log(toArray(12345)); // Output: [1, 2, 3, 4, 5] 
console.log(toNumber([2, 3, 5])); // ➝ 235