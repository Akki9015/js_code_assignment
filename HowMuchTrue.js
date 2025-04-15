function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
        count++;
      }
    }
    return count;
  }
  console.log(countTrue([true, false, false, true, false])); // 2
  console.log(countTrue([false, false, false, false]));      // 0
  console.log(countTrue([true]));                                // 0
    