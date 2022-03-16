let a = "A";
let b = "B";
let c = "C";

const strings = [1, 2, 3];
// console.log(([a, b, c] = strings));

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [...rest] = number;

const numbers = [
  [1, 2, 3],
  [90, 215, 300],
  [400, 600, 1000],
];

const listSelected = numbers;

console.log(listSelected[1][2]);
