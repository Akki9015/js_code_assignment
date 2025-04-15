function charIndex(word, char) {
    let first = word.indexOf(char);
    let last = word.lastIndexOf(char);
  
    if (first === -1) {
      return undefined;
    }
  
    return [first, last];
  }
  
  // Examples
  console.log(charIndex("hello", "l")); // [2, 3]
  console.log(charIndex("circumlocution", "c")); // [0, 8]
  console.log(charIndex("happy", "h")); // [0, 0]
  console.log(charIndex("happy", "e")); // undefined
  