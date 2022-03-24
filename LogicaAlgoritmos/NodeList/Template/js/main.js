const paragraph = document.querySelector(".paragrafos");
const ps = document.querySelectorAll("p");

// Pegar estilos computados no browser
const style = getComputedStyle(document.body);

const backgroundColorBody = style.backgroundColor;
let textColor = style.color;

//rgb(17, 86, 102)
for (let p of ps) {
  textColor = "#FFFF";
  p.style.color = textColor;
  p.style.backgroundColor = backgroundColorBody;
}
