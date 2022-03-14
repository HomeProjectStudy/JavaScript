/*  Operadores de comparação;

  && -> And = E todas as expressões precisam ser verdadeiras para retornar True, 
  caso contrário, todos os retornos será FALSE

  || -> Or = Ou -> Nesse caso se qualquer uma das expressões analisadas retornarem true, ela será true
  se todas retornarem false a expressão será FALSE;
   

  ! -> Not = Não;

  -> Valores Falsy; 

   * False(Lietal)
   * 0
   * ' ' " " ``
   * null / undefined
   * NaN
*/

function hello() {
  return "Oi";
}
let execute;

console.log(execute && hello());
// undefined, no caso False, como a variavel execute está somente inicializada ela é undefined, ou seja, FALSY
function hello() {
  return "Oi";
}
let execute1 = "Gabriel";

console.log(execute1 && hello());
/*
 - Nesse caso, como a váriavel contem um valor dentro de string, ou seja, um valor Truthy(True), 
 diferente de undefined, a função será executada;
*/
