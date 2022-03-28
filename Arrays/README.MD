## Arrays;

-> Splice: O splice() método altera o conteúdo de um array removendo
ou substituindo elementos existentes e/ou adicionando novos elementos no local;

- Retorna o item removido em formato de Array;

exemplo: `
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

`
