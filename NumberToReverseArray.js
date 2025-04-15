function reverseArr(num) {
    let result = [];
    while (num > 0) {
        let digit = num % 10;        // Get the last digit
        result.push(digit);          // Add to result array
        num = Math.floor(num / 10);  // Remove the last digit
    }
    return result;
}
console.log(reverseArr(1234)); 
console.log(reverseArr(56789)); 