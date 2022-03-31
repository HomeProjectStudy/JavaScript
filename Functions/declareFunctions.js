/*
 * Declaração de função (function hoisting)
 * Posso chamar a função acima de onde declarei ela, que executará normalmente, isso se dá
 * pelo hoisting, eleva a função;
 */

function helloWord() {
  console.log("Olá");
}

helloWord();

console.log("######################## ");

function data() {
  console.log("Data aqui");
}

const yourData = function (func) {
  func();
};

yourData(data);

// Arrow Function;

const funcArrow = () => {
  console.log("Sou uma arrow Function");
};

const obj = {
  falar() {
    console.log("Falando...");
  },
};
obj.falar();
