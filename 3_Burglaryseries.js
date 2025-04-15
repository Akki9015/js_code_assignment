function totalAmountAdjectives(insults) {

  const keys = Object.keys(insults);
  const count = keys.length;
  return count;
}


console.log(totalAmountAdjectives({ a: "moron" })); 

console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })); 

console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })); 
