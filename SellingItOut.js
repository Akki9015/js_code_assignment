function spelling(word) {
    let result = [];
    for (let i = 1; i <= word.length; i++) {
      result.push(word.slice(0, i));
    }
    return result;
  }
  console.log(spelling("bee"));      // ["b", "be", "bee"]
  console.log(spelling("happy"));    // ["h", "ha", "hap", "happ", "happy"]
  console.log(spelling("eagerly"));  // ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
    