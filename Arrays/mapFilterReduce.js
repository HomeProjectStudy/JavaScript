const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Retorne a soma do dobro de todos os pares;
// Filtrar pares;
// Dobrar os valores;
// Somar os valores;

const numbersPairs = number
  .filter((number) => number % 2 === 0) //Saída -> [ 50, 80, 2, 8, 22 ] pares;
  .map((value) => value * 2) // Dobro
  .reduce((acc, value) => acc + value); // Somar
console.log(numbersPairs); //Saída -> 324;
