const _velocity = Symbol("velocity"); // Prop Privada...

class Car {
  constructor(name) {
    (this.name = name), (this[_velocity] = 0);
  }

  run() {
    if (this[_velocity] >= 100) return;
    this[_velocity]++;
  }
  get acelerate() {
    return this[_velocity];
  }

  set acelerate(value) {
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    this[_velocity] = value;
  }
  stop() {
    if (this[_velocity] <= 0) return;
    this[_velocity]--;
  }
}

const carOne = new Car("BMW");

for (let i = 0; i <= 200; i++) {
  carOne.run();
}
carOne.run();
console.log(carOne);
