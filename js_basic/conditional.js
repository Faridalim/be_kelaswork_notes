let z = 5;
if (z > 2) {
  let z = 2; // let di sini membuat z menjadi local di dalam scope if
  console.log(z);
}
console.log(z); // z global

console.log(1 == 1 && 2 == 2);
