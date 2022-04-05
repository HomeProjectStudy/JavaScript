## Objetos e Prototypes;

- [x] Object.defineProperty: define uma nova propriedade diretamente em um objeto ou
      modifica uma propriedade existente em um objeto e retorna o objeto.

* Suas propriedades são: enumerable, value, writable, configurable:
  -> enumerable: Mostra a chave;
  -> value: Valor daquela chave;
  -> writable: Se estiver como true será possível alterar o valor daquela chave; Default: false;
  -> Configurable: Se ela é configurável; Nesse caso, alterado e excluído;

## Uso/Exemplos;

```javascript
function Person(name, age, mail) {
  this.name = name;
  this.age = age;
  this.mail = mail;

  Object.defineProperty(this, "mail", {
    enumerable: true, // Mostra Chave;
    value: mail, // Valor;
    writable: false, // Pode alterar;
    configurable: true, // Configuravel;
  });
}

const createPerson = new Person("Gabriel", 23, "gabriel.developer2@gmail.com");
  createPerson.mail = 'gabrieldejesus16gs@gmail.com' -> é gerado um error; e objeto permace original;
  -> Saída: Person {name: 'Gabriel', age: 23, mail: "gabriel.developer2@gmail.com"}

```

-> Nesse exemplo acima com a propriedade writable: false, não podemos alterar a
propriedade passada alí que no caso é 'mail';

```javascript
function Person(name, age, mail) {
  this.name = name;
  this.age = age;
  this.mail = mail;

  Object.defineProperty(this, "mail", {
    enumerable: true, // Mostra Chave;
    value: mail, // Valor;
    writable: true, // Pode alterar;
    configurable: true, // Configuravel;
  });
}

const createPerson = new Person("Gabriel", 23, "gabriel.developer2@gmail.com");
  createPerson.mail = 'gabrieldejesus16gs@gmail.com'
  -> Saída: Person {name: 'Gabriel', age: 23, mail: "gabrieldejesus16gs@gmail.com"}

```

-> No exemplo acima, com a propriedade writable: true, podemos alterar a propriedade mail nesse caso;

- A grande diferença entre um e outro é que um (defineProperty) é pra uma única chave, e o (defineProperties)
  são para várias chaves;

```javascript
function Person(name, age, mail) {
  Object.defineProperties(this, {
    name: {
      enumerable: true, // Mostra Chave;
    value: inventory, // Valor;
    writable: false, // Pode alterar;
    configurable: true, // Configuravel;
    },
    price: {
      enumerable: true, // Mostra Chave;
    value: inventory, // Valor;
    writable: false, // Pode alterar;
    configurable: true, // Configuravel;
    }
  })
}

const createPerson = new Person("Gabriel", 23, "gabriel.developer2@gmail.com");
  createPerson.mail = 'gabrieldejesus16gs@gmail.com'
  -> Saída: Person {name: 'Gabriel', age: 23, mail: "gabrieldejesus16gs@gmail.com"}

```

- funcionamento é o mesmo, porém definindo aspecto para cada chave do objeto.

## Getters e Setters

- Getter -> Obter o valor
- Setters -> Setar um valor

* O método get vai retornar o valor, como na função de exemplo abaixo;

```javascript
get: function () {
      return mail;
    },
```

- Já o método set permite fazer com que o valor seja alterado;

```javascript
  set: function (value) {
      if (typeof value !== "string") {
        throw new TypeError("Por favor insira um e-mail válido");
      }

      mail = value;
    },
```

## Métodos úteis para OBJETOS

-> Object.assing() -> Copia o objeto

## Herança?

O termo "Herança" é muito usado para descrever que as características de um objeto são
passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente).
Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas,
incluindo as documentações (como MDN) citam a palavra herança.

Vamos continuar usando o termo "Herança" até o final do curso, porém, Javascript não é uma
linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui.
O que ocorre, na verdade, é "delegação". Esse seria o
termo mais correto para descrever "Herança" em JS.

Quando fazemos algo como:

function Produto(nome, preco) {
this.nome = nome;
this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
this.preco += quantia;
};

function Camiseta(nome, preco, cor) {
Produto.call(this, nome, preco);
this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Mais especificamente no trecho:

Camiseta.prototype = Object.create(Produto.prototype);
Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype. Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento.
