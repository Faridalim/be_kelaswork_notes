const angka = 5.122;
const angka2 = 5.877;

// pembulatan
console.log(Math.round(angka)); // 5
console.log(Math.round(angka2)); // 6

// Ceil/Floor
console.log(Math.ceil(angka)); // 6. Dibulatkan ke atas
console.log(Math.floor(angka2)); // 5. Dibulatkan ke bawah

// random
console.log(Math.random()); // 0.53232.. angka 0 s.d 1
console.log(Math.floor(Math.random() * 10)); // angka 1 s.d 10
