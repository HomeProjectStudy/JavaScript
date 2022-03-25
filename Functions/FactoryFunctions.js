function createPerson(name, lastName, height, weight, age) {
  return {
    name,
    lastName,
    speaker: function () {
      return `${this.name} ${this.lastName}`;
    },
    height,
    weight,
    age,
    // Getter;
    get imc() {
      const indice = this.weight / this.height ** 2;
      return indice.toFixed(2);
    },
    //Getter;
    get firstName() {
      return `${this.name} ${this.firstName}`;
    },
    //Setter;
    set firstName(value) {
      value = value.split(" ");
      this.name = value.shift();
      this.lastName = value.join(" ");
    },
  };
}

const person1 = createPerson("Gabriel", "Jesus", 1.74, 93);

console.log(person1.imc);
