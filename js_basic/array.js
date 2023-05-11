const names = ["agus", "jono", "farid", 1, true];
console.log(names);
console.log(names[2]);

names[0] = "Ali";
console.log(names); // [ 'Ali', 'jono', 'farid', 1, true ]

// * Merubah Nilai ARRAY

// TODO: push (menambah item di akhir array)
names.push(33);
console.log(names); // [ 'Ali', 'jono', 'farid', 1, true, 33 ]

// TODO: pop (menghapus item di akhir array)
names.pop();
console.log(names); // [ 'Ali', 'jono', 'farid', 1, true ]

// TODO: shift (menghapus item di awal array)
names.shift();
console.log(names); // [ 'jono', 'farid', 1, true ]

// TODO: unshift (menambah item di awal array)
names.unshift("ali");
console.log(names); // [ 'ali', 'jono', 'farid', 1, true ]

// * Manipulasi ARRAY

// concat (menggabungkan 2 array)
const A = ["a", "b", "c"];
const B = ["d", "e"];

let C = A.concat(B);
console.log(C); // [ 'a', 'b', 'c', 'd', 'e' ]

// indexOf (mencari index)
console.log(A.indexOf("b")); // 1. jika item tdk ketemu : -1

// includes (mengecek apa item ada di array)
console.log(A.includes("a")); // true

// reverse (membalik posisi array)
console.log(A.reverse()); // [ 'c', 'b', 'a' ]
