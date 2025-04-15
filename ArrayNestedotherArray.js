function canNest(arr1, arr2) {
    let min1 = Math.min(...arr1);
    let max1 = Math.max(...arr1);
    let min2 = Math.min(...arr2);
    let max2 = Math.max(...arr2);
  
    return min1 > min2 && max1 < max2;
  }
  
 
  console.log(canNest([1, 2, 3, 4], [0, 6]));   // true
  console.log(canNest([3, 1], [4, 0]));         // true
  console.log(canNest([9, 9, 8], [8, 9]));      // false
  console.log(canNest([1, 2, 3, 4], [2, 3]));   // false
  