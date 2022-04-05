// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

// function carregaElementosNaPagina(json) {
//   const table = document.createElement('table');

//   for(let pessoa of json) {
//     const tr = document.createElement('tr');

//     let td1 = document.createElement('td');
//     td1.innerHTML = pessoa.nome;
//     tr.appendChild(td1);

// let td2 = document.createElement('td');
// td2.innerHTML = pessoa.idade;
// tr.appendChild(td2);

//     table.appendChild(tr);
//   }

//   const resultado = document.querySelector('.resultado');
//   resultado.appendChild(table);
// }

fetch("pessoas.json")
  .then((response) => response.json())
  .then((json) => loadingDataScreen(json));

function loadingDataScreen(json) {
  const table = document.createElement("table");

  for (let person of json) {
    const tr = document.createElement("tr");

    const td = document.createElement("td");
    //trás o valor;
    td.innerText = person.nome;
    //Adiciona o valor à tabela
    tr.appendChild(td);

    const td2 = document.createElement("td");
    td2.innerHTML = person.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const result = document.querySelector(".resultado");
  result.appendChild(table);
}
