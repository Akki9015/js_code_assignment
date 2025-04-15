function calculateDifference(obj, limit) {
    let total = 0;
  
    for (let key in obj) {
      total += obj[key];
    }
  
    return total - limit;
  }
console.log(calculateDifference({ a: 1, b: 2, c: 3 }, 5)); // Output: 1  