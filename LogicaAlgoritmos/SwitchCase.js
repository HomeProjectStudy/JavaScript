const data = new Date();
const diaSemana = data.getDay();

let diaSemanaText;

switch (diaSemana) {
  case 0:
    diaSemanaText = "Domingo";
    break;
  case 1:
    diaSemanaText = "Segunda";
    break;
  case 2:
    diaSemanaText = "Terça-Feira";
    break;
  case 3:
    diaSemanaText = "Quarta-Feira";
    break;
  case 4:
    diaSemanaText = "Quinta-feira";
    break;
  case 5:
    diaSemanaText = "Sexta-feita";
    break;
  case 6:
    diaSemanaText = "Sábado";
    break;

  default:
    break;
}

function getDayText(diaSemana) {
  let diaSemanaText;
  switch (diaSemana) {
    case 0:
      return (diaSemanaText = "Domingo");
    case 1:
      return (diaSemanaText = "Segunda");
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

console.log(diaSemana, diaSemanaText);
