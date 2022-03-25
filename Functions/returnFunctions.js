/* 
  return -> Retorna um valor e termina a função;
*/

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 3));

function multiplication(multiplication) {
  return function (number) {
    return number * multiplication;
  };
}
const doubles = multiplication(2);
const triples = multiplication(3);
const quadruple = multiplication(4);

console.log("====================================");

console.log(doubles(2));
console.log(triples(3));
console.log(quadruple(4));
