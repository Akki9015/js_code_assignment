function societyName(names) {
    return names
      .sort()                  // Alphabetical sort
      .map(name => name[0])    // First letter of each name
      .join('');               // Join into a single string
  }
  console.log(societyName(["Adam", "Sarah", "Malcolm"])); 
  console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
  console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));
    