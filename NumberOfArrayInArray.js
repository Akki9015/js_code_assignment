function numOfSubarrays(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count++;
        }
    }

    return count;
}
console.log(numOfSubarrays([1, 2, 3, 4])); // 0
console.log(numOfSubarrays([1, 2, [3, 4], 5])); // 1