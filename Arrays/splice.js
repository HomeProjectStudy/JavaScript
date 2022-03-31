// index ->     0        1        2           3         4
const names = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

names.splice(4, 1);
console.log(names);
// Saída -> [ 'Maria', 'João', 'Eduardo', 'Gabriel' ];

console.log("====================================");

const deleted = names.splice(3, 1);
console.log(names, deleted);
// Saída -> [ 'Gabriel' ]

console.log("====================================");

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");

console.log(months);
//Saída -> [ 'Jan', 'Feb', 'March', 'April', 'June' ]

console.log("====================================");

months.splice(4, 1, "May");
// substitui 1 elemento no índice 4

console.log(months);
// Saída -> [ 'Jan', 'Feb', 'March', 'April', 'May' ]
