const data = new Date();
const dataBrasil = formatedDate(data);
console.log(dataBrasil);
function formatedDate(data) {
  const dia = toFixedZero(data.getDate());
  const mes = toFixedZero(data.getMonth() + 1);
  const ano = toFixedZero(data.getFullYear());
  const hora = toFixedZero(data.getHours());
  const min = toFixedZero(data.getMinutes());
  const seg = toFixedZero(data.getSeconds());

  const formatedDate = `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

  return formatedDate;
}

function toFixedZero(number) {
  return number >= 10 ? number : `0${number}`;
}

/*
 * Dias da semana começa em 0, sendo 0 domingo e 6 sábado
 * Meses também começa em 0, sendo 0 janeiro e 11 dezembro;
 */
