const numberOne = [1, 2, 3];
const numberTwo = [4, 5, 6];
const numberThree = numberOne.concat(numberTwo);

console.log(numberThree);
// Saída -> [ 1, 2, 3, 4, 5, 6 ]

const numberFour = [...numberOne, ...numberTwo];
console.log(numberFour);
// Saída -> [ 1, 2, 3, 4, 5, 6 ]
