// Pensando em um ecomerce;
// O produto pode ter aumento e desconto
/*
  camiseta = cor
  caneca = material

*/

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increment = function (perceptual) {
  this.price += perceptual;
};
Product.prototype.discount = function (perceptual) {
  this.price -= perceptual;
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

/*
  Alem das propriedades da camiseta (shirt), temos também acesso ao metodo increment e discount de Product, 
  linkando o prototype da camiseta com o prototype de Product.
*/
const newShirt = new Shirt("Camiseta", 100, "azul");
//Saída -> { name: 'Camiseta', price: 100 }
console.log(newShirt);
