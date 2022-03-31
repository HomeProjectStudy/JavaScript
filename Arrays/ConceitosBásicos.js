const names = ["Julia", "Maria", "Joana"];
names[2] = "joão";

console.log(names);
// Saída -> [ 'Julia', 'Maria', 'joão' ] Nesse caso, alteramos o ultimo elemento "Joana" para "joão";

const namesTwo = ["Julia", "Maria", "Joana"];
delete namesTwo[2];
console.log(namesTwo);
// Saída -> [ 'Julia', 'Maria', <1 empty item> ] Nesse caso, excluímos o ultimo elemento, sem afetar o index do array;

const newArray = [...names, "Fernanda"];

const sliceMethod = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
const novo = sliceMethod.slice(1, 3);
console.log(novo);
/*
Saída -> [ 'Maria', 'Joana' ] nesse caso, o ultimo indece não é adicionado, 
          sempre que quisermo um indice devemos somar mais +1;
*/

const sliceMethodRemove = ["Eduardo", "Maria", "Joana", "Wallace", "Rosana"];
const newgroup = sliceMethodRemove.slice(1, -2);
console.log(newgroup);
/* 
  Saída -> [ 'Maria', 'Joana' ] Nesse caso, ele removeu os 2 ultimos elementos do array
            começando do indice 1 -> "Maria";
*/

// Convertendo string para Array;

const myName = "Gabriel Santos De Jesus";

const myNames = myName.split(" ");
console.log(myNames);
// Saída -> [ 'Gabriel', 'Santos', 'De', 'Jesus' ]

// Convertendo Array para string;

const arrayToString = ["Gabriel", "Santos", "De", "Jesus"];
const arrayToStringNew = arrayToString.join(" ");
console.log(arrayToStringNew);
/*
Saída -> Gabriel Santos De Jesus, no caso do join, utilizamos o separado de espaço, mas poderia ser
utilizado qualquer coisa join(','), join('-');

*/
