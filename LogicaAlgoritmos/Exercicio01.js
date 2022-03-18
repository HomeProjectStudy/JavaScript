// Escreva uma função que receba 2 números e retorne o maior deles;

function getTwoNumbers(num1, num2) {
  // Segunda Maneira;
  const sum = num1 > num2 ? num1 : num2;
  return sum;

  // Primeira maneira;
  if (num1 > num2) {
    return num1;
  }
  return num2;
}
console.log(getTwoNumbers(10, 20));

console.log("==============Exercicio 2;================");

/*
  Escrever função chamada andLandscape() que receba dois argumentos, largura e altura
  de uma imagem. Retorne true se a imagem estiver no modo paisagem;
*/

function andLandscape(width, height) {
  return width > height; // Já vai retornar um boolean
  if (width > height) {
    return true;
  }
  return false;
}

console.log(andLandscape(500, 300));

console.log("==============Exercicio 3;================");

/*
  Escreva uma função que receba número e retorne o seguinte;
  Número é divisivel por 3 = Fizz;
  Número é divisivel por 5 = Buzz;
  Número é divisivel por 3 e 5 = FizzBuzz;
  Número não é divisivel por 3 e 5 = retorne o própio número
  checar se o número é um número;
  use a função com números de 0 a 100;
*/

function radom(num1) {
  if (typeof num1 !== "number") return num1;
  if (num1 % 3 === 0 && num1 % 5 === 0) return "FizzBuzz"; // Essa condição avalia duas coisas ao mesmo tempo, por tanto deve ser movida pro topo;
  if (num1 % 3 === 0) return "Fizz";
  if (num1 % 5 === 0) return "Buzz";
  return num1;
}
console.log(radom(3));
