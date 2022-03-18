function getHours() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(function () {
  console.log(getHours());
}, 3000);

setTimeout(function () {
  clearInterval(timer);
}, 5000);
setTimeout(function () {
  console.log("Finalizou a função setInterval");
}, 5000);
