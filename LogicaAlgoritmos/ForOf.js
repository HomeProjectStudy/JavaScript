const name = "Gabriel Jesus";

// For Clássico
for (let index = 0; index < name.length; index++) {
  console.log(name[index]);
}

// ForIn -> retorna Indice ou chaves
console.log("=================For In ==================");

for (let i in name) {
  console.log(name[i]);
}

// ForOf - Retorna Somente o Valor, não utilizamos para Objeto;

console.log("=================For Of ==================");

for (let value of name) {
  console.log(value);
}

const person = {
  firstName: "Gabriel",
  lastName: "Jesus",
  age: 23,
};
