function mapping(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let lower = arr[i];
        let upper = arr[i].toUpperCase();
        result[lower] = upper;
    }
    return result;
}
console.log(mapping(["a", "b", "c"])); 
console.log(mapping(["x", "y", "z"])); 