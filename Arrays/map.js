const number = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const person = [
  { name: "Luiz", age: 40 },
  { name: "Maria", age: 25 },
  { name: "Joana", age: 20 },
  { name: "Wallace", age: 56 },
  { name: "Rosana", age: 32 },
  { name: "Leticia", age: 19 },
];
const result = number.map((value) => value * 2);
console.log(result);

// Retorne apenas uma string com o nome;

const personName = person.map((value) => value.name);
console.log(personName);
//Saída -> [ 'Luiz', 'Maria', 'Joana', 'Wallace', 'Rosana', 'Leticia' ]

// Remova apenas a chave "nome" do objeto;
const removeKeyName = person.map((value) => {
  delete value.name;
  return value;
});
console.log(removeKeyName);
//Saída -> [ { age: 40 }, { age: 25 }, { age: 20 }, { age: 56 }, { age: 32 }, { age: 19 } ]

//adicione uma chave "id" em cada objeto;
const addIdKey = person.map((value, index) => {
  value.id = index;
  return value;
});

console.log(addIdKey);
/*
Saída -> 
[ 
  { name: 'Luiz', age: 40, id: 0 }, 
  { name: 'Maria', age: 25, id: 1 }, 
  { name: 'Joana', age: 20, id: 2 }, 
  { name: 'Wallace', age: 56, id: 3 }, 
  { name: 'Rosana', age: 32, id: 4 }, 
  { name: 'Leticia', age: 19, id: 5 } 
]
*/
