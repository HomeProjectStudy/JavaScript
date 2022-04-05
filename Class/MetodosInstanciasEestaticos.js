class RemoteControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }
  // Metodo de instancia
  setVolume() {
    this.volume += 2;
  }
  lowVolume() {
    this.volume -= 2;
  }

  // Metodo Instático
  /*
    -> Métodos estáticos não podem ser acessados por instâncias, 
    e não tem acesso aos valores do constructor;
  */

  static trocaPilha() {
    console.log("Troca a pilha");
  }
}
// Instancia
const controlOne = new RemoteControl("LG");

controlOne.setVolume();

console.log(controlOne);
