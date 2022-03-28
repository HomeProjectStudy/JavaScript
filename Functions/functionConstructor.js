// Função construtora retorna -> Objetos;

/*
  Construtora -> Person (Letra maiuscula)
  FactoryFunction -> CamelCase createPerson()
*/

function Person(name, lastName) {
  // Atributos ou métodos privados;
  const id = 12342341;
  const methodInternal = function () {};

  //Atributo ou métodos públicos;
  this.name = name;
  this.lastName = lastName;

  this.method = function () {
    console.log(this.name + "Sou um método");
  };
}

const createPerson = new Person("Gabriel", "Jesus");
console.log(createPerson);
