document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

function carregaPagina(el) {
  const href = el.getAttribute("href");

  fetch(href)
    .then((response) => {
      return response.text();
    })
    .then((text) => carregaResultado(text))
    .catch((error) => console.error(error));
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

// Exemple document MDN;
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
