function testJackpot(arr) {
    return arr.every(el => el === arr[0]);
  }
    console.log(testJackpot(["@", "@", "@", "@"])); // true 
    console.log(testJackpot(["abc", "abc", "abc", "abc"])); // true
    console.log(testJackpot(["SS", "SS", "SS", "SS"])); // true
    console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // false  