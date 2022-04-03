class Car {
  constructor(name) {
    (this.name = name), (this.velocity = 0);
  }
  run() {
    if (this.velocity >= 100) return;
    this.velocity++;
  }
  stop() {
    if (this.velocity <= 0) return;
    this.velocity--;
  }
}

const carOne = new Car("BMW");

for (let i = 0; i <= 200; i++) {
  carOne.run();
}
carOne.run();
console.log(carOne);
