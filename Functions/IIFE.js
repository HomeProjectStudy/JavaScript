// IIFE -> Immediately Invoked function expression;

//Fugir do escopo global;

(function () {
  const firstName = "Jesus";
  function createName(name) {
    return `${name} ${firstName}`;
  }

  console.log(createName("Gabriel"));

  const numbers = [1, 2, 3, 4, 5, 6, 7];

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
})();
