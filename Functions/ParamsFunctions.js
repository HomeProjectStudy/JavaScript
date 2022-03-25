/*
  * Nessa maneiro de declarar função temos o argumento "arguments" disponível, que é onde
  fica armazenado todos os nossos argumentos;
*/
function func() {
  console.log(arguments[0]);
  // Saída: 'VALOR'
}
func("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcOne() {
  let total = 0;
  for (let argument of arguments) {
    total += argument;
  }
  console.log(total);
  //Saída: 28 somatória de todos os números passado na função utilizando arguments;
}
funcOne(1, 2, 3, 4, 5, 6, 7);

function sum(a, b = 20, c = 30) {
  console.log(a + b + c);
}
// Para assumir o valor padrão deve ser passado "Undefined"
sum(2, undefined, 30);

function destructuringObj({ name, firstName, age }) {
  console.log(name, firstName, age);
}
const person = { name: "Gabriel", firstName: "Jesus", age: 23 };
destructuringObj(person);

function destructuringArray([name, firstName, age]) {
  console.log(name, firstName, age);
}
const personArray = ["Gabriel", "Santos", 23];
destructuringArray(personArray);

function counter(operator, acumalator, ...numbers) {
  for (let number of numbers) {
    if (operator === "+") acumalator += number;
    if (operator === "-") acumalator -= number;
    if (operator === "/") acumalator /= number;
    if (operator === "*") acumalator *= number;
  }
  console.log(acumalator);
}
counter("+", 20, 30, 40, 50);
// Saida -> 140

const counterOne = (...args) => {
  console.log(args);
};
counterOne("+", 20, 30, 40, 50);
// Saída -> [ '+', 20, 30, 40, 50 ]
