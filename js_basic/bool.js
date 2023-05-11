console.log(true); // true
console.log(Boolean("aku")); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true

console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false

// Selalu gunakan strict equality
