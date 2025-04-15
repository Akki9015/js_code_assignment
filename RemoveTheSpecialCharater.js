function removeSpecialCharacters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      // Agar character alphanumeric, dash, underscore ya space ho, tab result mein add karo
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9') || char === '-' || char === '_' || char === ' ') {
        result += char;
      }
    }
    return result;
  }
    console.log(removeSpecialCharacters("Hello@World!"));  
    console.log(removeSpecialCharacters("123#456")); 
    console.log(removeSpecialCharacters("abc_def-ghi")); 