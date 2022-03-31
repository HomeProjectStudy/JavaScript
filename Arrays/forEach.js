const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let total = 0;

number.forEach((value, index, array) => {
  //Simulando reduce;
  total += value;
});

console.log(total);
// Saída -> 236
