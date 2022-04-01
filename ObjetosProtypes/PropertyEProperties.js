function Product(name, price, inventory) {
  this.name = name;
  this.price = price;
  this.inventory = inventory;

  Object.defineProperty(this, "inventory", {
    enumerable: true, // Mostra Chave;
    value: inventory, // Valor;
    writable: false, // Pode alterar;
    configurable: true, // Configuravel;
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true, // Mostra Chave;
      value: inventory, // Valor;
      writable: false, // Pode alterar;
      configurable: true, // Configuravel;
    },
    price: {
      enumerable: true, // Mostra Chave;
      value: inventory, // Valor;
      writable: false, // Pode alterar;
      configurable: true, // Configuravel;
    },
  });
}

const productOne = new Product("Bike", 1000, 10);
productOne.inventory = 50000;

console.log(productOne);
/*
 * Saída: Product { name: 'Bike', price: 1000, inventory: 50000 }
 -> Nesse caso com o writable ativado(true), eu consegui sobrescrever o valor de inventory de 10 para 
  50000; Caso estivesse false, não conseguiria alterar o seu valor;
 */

// -> Getters e Setters

function Person(name, age, mail) {
  this.name = name;
  this.age = age;
  this.mail = mail;

  Object.defineProperty(this, "mail", {
    enumerable: true, // Mostra Chave;
    // value: mail, // Valor;
    // writable: false, // Pode alterar;
    configurable: true, // Configuravel;
    get: function () {
      return mail;
    },
    set: function (value) {
      if (typeof value !== "string") {
        throw new TypeError("Por favor insira um e-mail válido");
      }

      mail = value;
    },
  });
}

const person1 = new Person("Gabriel", 23, "gabriel.dev@gmail.com");
// console.log(person1);
// Saída -> Person { name: 'Gabriel', age: 23, mail: [Getter] }
person1.mail = 500;
console.log(person1.mail);
// Saída -> throw new TypeError("Por favor insira um e-mail válido");
