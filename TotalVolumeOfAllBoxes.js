function totalVolume(...boxes) {
    return boxes.reduce((total, box) => {
      return total + box[0] * box[1] * box[2];
    }, 0);
  }
console.log(totalVolume([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(totalVolume([1, 2, 3]));   
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])
); 