function capMe(names) {
    return names.map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    });
}
console.log(capMe(["matt", "sara", "luke"])); 
console.log(capMe(["matt", "sara", "luke", "matt"])); 