function sliceSum(arr, n) {
    return arr.slice(0, n).reduce((sum, num) => sum + num, 0);
  }
  console.log(sliceSum([9, 8, 7, 6], 3));   // ➝ 24
  console.log(sliceSum([1, 3, 2], 2));      // ➝ 4
  console.log(sliceSum([4, 2, 5, 7], 4));   // ➝ 18
  console.log(sliceSum([3, 6, 2], 0));      // ➝ 0
  console.log(sliceSum([5, 1], 5));         // ➝ 6 (n > length)
    