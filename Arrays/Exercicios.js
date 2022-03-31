//Crie uma função que receba um array contendo apenas números e retorne o primeiro elemento.

function getFirstElement(array) {
  return array[0];
}

console.log(getFirstElement([1, 2, 3, 4, 5]));
//Saída -> 1

//Crie uma função que receba uma matriz de números e retorne os números mínimo e máximo, nessa ordem.

function getMinMax(array) {
  return [Math.min(...array), Math.max(...array)];
}
/* 
  - Nesse Caso o Math.min, retorna o número de menor valor passado pra ele, nesse caso, 
  o array que recebemos via parametro;
  - Math.max() função retorna o maior dos zero ou mais números fornecidos como parâmetros de entrada,
  nesse caso o array que recebemos via parametro;
    -> OBS: Caso o parametro recebido não for um número ou não puder ser convertido em um, o retorno será
    NaN.
*/

console.log(getMinMax([3, 2, 10, 4, 5]));
// Saída -> [ 2, 10 ]

console.log(
  "Escreva uma função que converta um objeto em uma matriz de chaves e valores"
);

function converterToArray(obj) {
  return Object.entries(obj);
}

/*
  O método Object.entries() retorna um array de pares chave/valor, como chave de string
*/

console.log(converterToArray({ a: 1, b: 2, c: 3 }));
