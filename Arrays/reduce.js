const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const person = [
  { name: "Luiz", age: 40 },
  { name: "Maria", age: 25 },
  { name: "Joana", age: 20 },
  { name: "Wallace", age: 56 },
  { name: "Rosana", age: 32 },
  { name: "Leticia", age: 19 },
];

// Soma todos os números do array
// Retorne um array com os pares
// Retorne um array com o dobro dos valores
const total = number.reduce(function (accumlator, currentValue, array) {
  accumlator += currentValue;
  return accumlator;
}, 0);

console.log(total);
// Saída -> 236

// Retorne a pessoa mais velha;

const personOld = person.reduce(function (accumlator, currentValue, array) {
  if (accumlator.age > currentValue.age) {
    return accumlator;
  } else {
    return currentValue;
  }
});

console.log(personOld);
// Saída -> { name: 'Wallace', age: 56 }
