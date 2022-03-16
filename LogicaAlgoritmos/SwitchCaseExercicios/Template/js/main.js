const title = document.querySelector(".container h1");
const data = new Date();

title.innerHTML = createdDate(data);

function getDayText(diaSemana) {
  let diaSemanaText;
  switch (diaSemana) {
    case 0:
      return (diaSemanaText = "Domingo");
    case 1:
      return (diaSemanaText = "Segunda-Feira");
    case 2:
      return (diaSemanaText = "Terça-Feira");
    case 3:
      return (diaSemanaText = "Quarta-Feira");
    case 4:
      return (diaSemanaText = "Quinta-feira");
    case 5:
      return (diaSemanaText = "Sexta-feita");
    case 6:
      return (diaSemanaText = "Sábado");
    default:
      break;
  }
}

function getNameMes(NumberMonths) {
  let nameMonth;
  switch (NumberMonths) {
    case 0:
      return (nameMonth = "Janeiro");
    case 1:
      return (nameMonth = "Fevereiro");
    case 2:
      return (nameMonth = "Março");
    case 3:
      return (nameMonth = "Abril");
    case 4:
      return (nameMonth = "Maio");
    case 5:
      return (nameMonth = "Junho");
    case 6:
      return (nameMonth = "Julho");
    case 7:
      return (nameMonth = "Agosto");
    case 8:
      return (nameMonth = "Setembro");
    case 9:
      return (nameMonth = "Outubro");
    case 10:
      return (nameMonth = "Novembro");
    case 11:
      return (nameMonth = "Dezembro");
    default:
      break;
  }
}

function createdDate(data) {
  const day = data.getDay();
  const numberMonths = data.getMonth();

  const nameDay = dayWeekText(data.getDay());
  const nameMonth = getNamesMonths(numberMonths);

  const formatedDate =
    `${nameDay},  ${data.getDate()}  de ${nameMonth}` +
    ` de ${data.getFullYear()} `;

  return formatedDate;
}

function getNamesMonths(numberMonths) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "junho",
    "Julho",
    "Agosto",
    "setembro",
    "outubro",
    "Novembro",
    "dezembro",
  ];
  return months[numberMonths];
}

function dayWeekText(week) {
  const weeks = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  return weeks[week];
}
/* 
  Maneira curta de declarar datas e exibir em tela;  
*/
// title.innerHTML = data.toLocaleDateString("pt-BR", {
//   dateStyle: "full",
// });
