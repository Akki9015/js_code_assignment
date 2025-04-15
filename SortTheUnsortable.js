function sortIt(arr) {
    return arr.sort((a, b) => {
      let valA = Array.isArray(a) ? a[0] : a;
      let valB = Array.isArray(b) ? b[0] : b;
      return valA - valB;
    });
  }
console.log(sortIt([1, 2, 3, 4, 5])); 
console.log(sortIt([1, [2], 3, 4, 5]));  