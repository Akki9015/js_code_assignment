function matchLastItem(arr) {
    let concat = "";
  
    for (let i = 0; i < arr.length - 1; i++) {
      concat += arr[i]; 
    }
  
    let lastItem = arr[arr.length - 1];
    
    return concat === lastItem;
  }
  console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); 
  console.log(matchLastItem(["abc", "ab", "cde"])); 
  