/* ======================================= */
// Dessa forma utilizando números randomicos o console.log() sempre executaram primeiro;
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("F1");
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

console.log("Executou primeiro... ");

/* ======================================= */

// Dessa forma, utilizando callback, sempre vai executar uma à uma, e aí o console.log() será o último.

f1(function () {
  f2(function () {
    f3(function () {
      console.log("Olá Mundo");
    });
  });
});

console.log("----------- Callback em arvóres(acima) -----------");

// Forma de não deixa o código em arvore, como acima;

f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}
function f2Callback() {
  f3(f3Callback);
}
function f3Callback() {
  console.log("Olá Mundo");
}
