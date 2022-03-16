const fruit = ["Maça", "Pêra", "Uva", "Melância", "Laranja"];

// For Clássico;
for (let i = 0; i < fruit.length; i++) {
  const frutas = fruit;
  console.log(frutas[i]);
}
console.log("====================================");

const person = {
  firstName: "Gabriel",
  lastName: "Jesus",
  age: 23,
};
// For In - Ler os indices[Array] ou chavês do objeto{}
for (let customer in person) {
  console.log(person[customer]);
}
