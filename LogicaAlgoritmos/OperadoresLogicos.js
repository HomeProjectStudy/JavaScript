/*  Operadores de comparação;

  && -> And = E todas as expressões precisam ser verdadeiras para retornar True, 
  caso contrário, todos os retornos será FALSE

  || -> Or = Ou -> Nesse caso se qualquer uma das expressões analisadas retornarem true, ela será true
  se todas retornarem false a expressão será FALSE;
   

  ! -> Not = Não;
*/

const expressaoAnd = true && true && true; // RETORNO = TRUE;

const expressaoOr = false || true; // TRUE;

// Cenário Hipotético

const user = "Gabriel";
const password = "12345";

const isLogged = user === "Gabriel" && password === "12345";

console.log(isLogged); // Retorno True;
