function allTruthy(...args) {
    for (let i = 0; i < args.length; i++) {
        if (!args[i]) {
            return false;
        }
    }
    return true;
}

console.log( allTruthy("hello", "world", "", "JS")); // false
console.log( allTruthy("hello", "world", "JS")); // true
console.log( allTruthy(1, 2, 3)); // true