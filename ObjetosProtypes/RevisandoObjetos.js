// Create Objects

const person = {
  name: "Gabriel",
  age: 23,
  address: {
    street: "Rua Tulipa",
    number: 11,
    city: "Espirito Santo",
    state: "ES",
    neighborhood: "Vila Velha",
  },
  /*
    Nesse caso utilizando o metodo "get", 
    podemos acessar o valor da propriedade, 
    sem precisar invocar a função; Passará de método, 
    para atribuito, podendo acessar via "."(ponto).
  */
  get getName() {
    return `${this.name} está falando o seu nome.`;
  },
};

console.log(person.name);
//Saída -> Gabriel;

console.log(person.getName);
// Saída -> Gabriel está falando o seu nome.

//factory Functions;
function createPerson(name, lastName, age, address) {
  return {
    name,
    lastName,
    age,
    address: {
      street: address.street,
      number: address.number,
      city: address.city,
      state: address.state,
    },
    fullName() {
      return `${this.name} ${this.lastName}`;
    },
  };
}

const person1 = createPerson(
  "Gabriel",
  "Jesus",
  23,
  (address = {
    street: "Rua Tulipa",
    number: 11,
    city: "Espirito Santo",
    state: "ES",
  })
);
console.log(person1);
/*
 Saída: (OBJ);
 {
  name: 'Gabriel',
  lastName: 'Jesus',
  age: 23,
  address: {
    street: 'Rua Tulipa',
    number: 11,
    city: 'Espirito Santo',
    state: 'ES'
  },
  fullName: [Function: fullName]
}
*/
