function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (perceptual) {
  this.price = this.price - this.price * (perceptual / 100);
};
Product.prototype.increment = function (perceptual) {
  this.price = this.price + this.price * (perceptual * 100);
};

const produtOne = new Product("Notebook", 5000);
produtOne.discount(15);
console.log(produtOne);
// Saída -> Product { name: 'Notebook', price: 5750 }
