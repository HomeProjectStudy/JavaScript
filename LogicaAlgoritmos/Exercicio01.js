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
