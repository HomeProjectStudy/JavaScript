const elements = [
  { tag: "P", text: "Frase 1" },
  { tag: "Div", text: "Frase 2" },
  { tag: "Footer", text: "Frase 3" },
  { tag: "section", text: "Frase 4" },
];
const container = document.querySelector(".container");

const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  const { tag, text } = elements[i];
  let createTag = document.createElement(tag);
  createTag.innerText = text;
  div.appendChild(createTag);
}
container.appendChild(div);
