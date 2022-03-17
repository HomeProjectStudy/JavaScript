const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Continue - continua para proxima interação ;
// Break -> Saí do Laço;

for (let numbers of number) {
  console.log(numbers);
  if (numbers === 2) {
    console.log("Pulei pra 2 ");
    continue;
  }
  console.log(numbers);

  if (numbers === 7) {
    console.log("7 encontrado ");
    break;
  }
}

// Criando com For In

for (let i in number) {
  let numbers = number[i];
  if (numbers === 2) {
    console.log("Pulei pra 2 ");
    continue;
  }
  console.log(numbers);

  if (numbers === 7) {
    console.log("7 encontrado ");
    break;
  }
}

// For clásico

for (let i = 0; i < number.length; i++) {
  let numbers = number[i];
  if (numbers === 2) {
    console.log("Pulei pra 2 ");
    continue;
  }
  console.log(numbers);

  if (numbers === 7) {
    console.log("7 encontrado ");
    break;
  }
}

// Com While
let index = 0;
while (index < number.length) {
  let numbers = number[index];
  if (numbers === 2) {
    console.log("Pulei pra 2 ");
    index++;
    continue;
  }
  console.log(numbers);

  if (numbers === 7) {
    console.log("7 encontrado ");
    index++;
    break;
  }
  index++;
}

do {
  let numbers = number[index];
  if (numbers === 2) {
    console.log("Pulei pra 2 ");
    index++;
    continue;
  }
  console.log(numbers);

  if (numbers === 7) {
    console.log("7 encontrado ");
    index++;
    break;
  }
  index++;
} while (index < number.length);
