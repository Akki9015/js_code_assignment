function mirror(arr) {
    let reversed = arr.slice(0, arr.length - 1).reverse();
    return arr.concat(reversed);
}
console.log(mirror([1, 2, 3, 4, 5])); // ➝ [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mirror([1, 2, 3])); // ➝ [1, 2, 3, 2, 1]
