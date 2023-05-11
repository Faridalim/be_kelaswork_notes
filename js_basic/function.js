// ! Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

function sebutNama(param) {
  console.log(`Nama Anda adalah ${param}`);
}

sebutNama("Farid");

// dg return hasil
function jumlah(...param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum += param[i];
  }
  console.log(sum);
}

const res = jumlah(1, 2, 4, 5);

// anonymous function
const anu = function () {
  //   return "hey";
  console.log("anonimous function");
};

anu();

// arrow function
const arrow = () => {
  console.log("arrow function");
};

arrow();

// default argumen
function myFunction(x, y = 2) {
  // function code
}

// function closure
// 1. dapat mengakses apapun di dalam dirinya
// 2. dapat mengakses variable yg dimiliki outer function
// 3. dapat mengakses variable global
