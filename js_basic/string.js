const word = "AKU";

console.log(word.length);
console.log(word[0]);

// slice - mendapatkan substring
console.log(word.slice(1, 2));
let kata = "Nama Farid Al Alimi";
console.log(kata.slice(5));

// trim
const word2 = "   tes   ";
console.log(word2);
console.log(word2.trim());

console.log(word2.toUpperCase());
console.log(word.toLowerCase());

// concat
const A = "selamat";
const B = "hari";
const C = "raya";

const res = A.concat(" ", B, " ", C);
const res2 = A + " " + B + " " + C;

console.log(res);
console.log(res2);
