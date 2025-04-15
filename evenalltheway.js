function getOnlyEvens(arr) {
    return arr.filter((num, index) => index % 2 === 0 && num % 2 === 0);
  }
console.log(getOnlyEvens([1, 2, 3, 4, 5, 6])); // Output: [2, 4]  