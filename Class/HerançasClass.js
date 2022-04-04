class Device {
  constructor(name) {
    this.name = name;
    this.on = false;
  }

  turnOn() {
    if (this.on) {
      return this.name + "Já ligado";
    }

    this.on = true;
  }

  turnOff() {
    if (!this.on) {
      return this.name + "Já desligado...";
    }

    this.on = false;
  }
}

class Smartphone extends Device {
  constructor(color) {
    super(name);
    this.color = color;
  }
}
