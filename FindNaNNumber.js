function findNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(findNaN([1, 2, NaN, 4]));
console.log(findNaN([1, 2, 3, 4]));    
console.log(findNaN([1, 2, NaN])); 
console.log(findNaN([1, 2, 3, NaN])); 