const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputWeight = event.target.querySelector("#peso");
  const inputHeigh = event.target.querySelector("#altura");

  const weight = Number(inputWeight.value);
  const height = Number(inputHeigh.value);

  if (!weight || !height) {
    setResult("Peso/altura inválido", false);
    return;
  }

  const imc = getImc(weight, height);

  const levelImc = getLevelResulImc(imc);

  const message = `Seu IMC é ${imc} (${levelImc})`;

  setResult(message, true);
});

function getImc(weight, height) {
  const imc = weight / height ** 2;

  return imc.toFixed(2);
}

function getLevelResulImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.9) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
function createParagraph() {
  const paragraph = document.createElement("p");
  return paragraph;
}
function setResult(message, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const paragraph = createParagraph();
  paragraph.innerHTML = message;
  result.appendChild(paragraph);
  if (isValid) {
    paragraph.classList.add("paragraph-result");
  } else {
    paragraph.classList.add("bad");
  }
}
