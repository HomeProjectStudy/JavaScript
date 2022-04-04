function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min)) + min;
}
function time(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

/*
  Métodos para promise;
  1 - Promise.all
  2 - Promise.race
  3 - Promise.resolve
  4 - Promise.reject
*/

const promises = [
  "Primeiro valor",
  time("Promise 1", 3000),
  time("Promise 2", 500),
  time("Promise 3", 1000),
  time(1000, 1000),
  "Outro Valor",
];
// Resovle todos e trás o valor
Promise.all(promises)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// Ele me entrega o primeiro valor que resolveu
Promise.race(promises) // -> Nesse caso "Primeiro valor",
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
