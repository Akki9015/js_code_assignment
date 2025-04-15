function warOfNumbers(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return Math.abs(evenSum - oddSum);
}
console.log(warOfNumbers([2, 8, 7,5])); 
console.log(warOfNumbers([12,90, 75])); 