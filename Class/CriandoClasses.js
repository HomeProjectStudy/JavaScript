class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
  speak() {
    console.log(`${this.name} está falando`);
  }
}

const personOne = new Person("Gabriel", "Santos");

function PersonTwo(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

PersonTwo.prototype.speak = function () {
  console.log(`${this.name} está falando`);
};
