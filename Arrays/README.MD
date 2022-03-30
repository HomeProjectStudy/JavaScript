## Arrays;

# Splice

-> Splice: O splice() método altera o conteúdo de um array removendo
ou substituindo elementos existentes e/ou adicionando novos elementos no local;

- Retorna o item removido em formato de Array;

exemplo: `
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
indice(2), delete(0), add('drum')
let removed = myFish.splice(2, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

`

# Filter

- O filter()vmétodo cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
  `
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

`

### Sintaxe Filter()

-> filter((element, index, array) => { /_ ... _/ } )

# Map;

- O map() método cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento na matriz de chamada.
  `
  const array1 = [1, 4, 9, 16];

  // pass a function to map
  const map1 = array1.map(x => x \* 2);

  console.log(map1);
  // expected output: Array [2, 8, 18, 32]
  `

### Sintaxe Map() :

-> map((element, index, array) => { /_ ... _/ })
-> // Callback function map(callbackFn)
