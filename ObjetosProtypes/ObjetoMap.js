const persons = [
  { id: 3, name: "Gabriel" },
  { id: 2, name: "Luiz" },
  { id: 1, name: "Maria" },
];

const newPersons = {};

for (const person of persons) {
  const { id } = person;
  newPersons[id] = { ...person };
}

console.log(newPersons);
