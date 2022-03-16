const person = {
  name: "Gabriel",
  lastName: "Jesus",
  age: 23,
  address: {
    street: "Av tulipa",
    number: 320,
  },
};

// AtribuicaoViaDesestruturação
const {
  name,
  address: { street },
} = person;
