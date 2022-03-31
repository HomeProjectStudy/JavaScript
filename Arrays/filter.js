const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const amount = number.filter((value) => {
  return value > 10;
});
console.log(amount);
// Saída -> [ 50, 80, 11, 15, 22, 27 ]

const person = [
  { name: "Luiz", age: 40 },
  { name: "Maria", age: 25 },
  { name: "Joana", age: 20 },
  { name: "Wallace", age: 56 },
  { name: "Rosana", age: 32 },
  { name: "Leticia", age: 19 },
];

// Retirar as pessoas que tem o nome com 5 letras ou mais;

const removePersonFiveString = person.filter((value) => {
  return value.name.length >= 5;
});

console.log(removePersonFiveString);
/* 
 Saída -> [
  { name: 'Maria', age: 25 },
  { name: 'Joana', age: 20 },
  { name: 'Wallace', age: 35 },
  { name: 'Rosana', age: 32 },
  { name: 'Leticia', age: 19 }
]
  -> Só o Luiz ficou de fora por ter um nome menor que 5;
*/
// retorne as pessoas com mais de 50 anos;
const personMoreThan50 = person.filter((value) => {
  return value.age ? value.age > 50 : "Não existe ninguém com mais de 50 anos";
});

console.log(personMoreThan50);
/* 
  Saída: [ { name: 'Wallace', age: 56 } ]
*/

// Retorna as pessoas cujo nome termina com a;
const personFinallyA = person.filter((value) => {
  return value.name.toLowerCase().endsWith("a");
});

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Saída: [ 'exuberant', 'destruction', 'present' ]
