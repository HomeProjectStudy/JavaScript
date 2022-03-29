## Arrays;

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

- O filter()vmétodo cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
  `
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

`

### Sintaxe Filter

-> filter((element, index, array) => { /_ ... _/ } )

# Map;
