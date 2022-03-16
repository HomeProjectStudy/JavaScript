/* 
  Para o for é necessário passar três condições dentro do laço for;
  1 - Criar Variavel
  2 - Criar condição
  3 - incrementar ou decrementar
*/

// i = index;
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("====================================");

for (let dez = 0; dez <= 20; dez += 10) {
  console.log(dez); // o laço vai pular de 10 em 10
}
console.log("====================================");
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "Par" : "Impar";
  console.log(i, par);
}
console.log("====================================");

const fruit = ["Maça", "Pêra", "Uva"];
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
