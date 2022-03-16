// While;

let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
console.log("====================================");

function radomGenerator(min, max) {
  const random = Math.random() * (max - min) + min;
  return Math.floor(random);
}

let generator = radomGenerator(1, 50);

while (generator !== 10) {
  generator = radomGenerator(1, 50);
  console.log(generator);
}

// Do While

do {
  console.log(generator);
} while (generator !== 10);

/*
 * DoWhile ->  checa pelo menos uma vez o código para testar;
 * While -> Não faz essa secagem;
 */
