function formatPhoneNumber(numbers) {
    const area = numbers.slice(0, 3).join('');
    const middle = numbers.slice(3, 6).join('');
    const last = numbers.slice(6).join('');
    return `(${area}) ${middle}-${last}`;
  }
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); 