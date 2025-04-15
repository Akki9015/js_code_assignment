function sumTwoSmallestNums(numbers) {
    // Step 1: Sirf positive numbers ko filter karo
    let positives = numbers.filter(num => num > 0);

    // Step 2: Unhe ascending order mein sort karo
    positives.sort((a, b) => a - b);

    // Step 3: Pehle do numbers ka sum return karo
    return positives[0] + positives[1];
}
console.log(sumTwoSmallestNums([1, 2, 3, 4, 5]));        
console.log(sumTwoSmallestNums([4, 2, 3,6]));