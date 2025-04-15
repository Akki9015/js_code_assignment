function marathonDistance(arr) {
    if (!arr || arr.length === 0) return false; // empty or invalid

    let total = arr.reduce((sum, num) => sum + Math.abs(num), 0);
    return total === 25;
}
console.log(marathonDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(marathonDistance([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(marathonDistance([1, 9, 5, 8, 2]));  
console.log(marathonDistance([-6, 15, 4]));