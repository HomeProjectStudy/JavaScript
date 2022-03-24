const clock = document.querySelector(".clock");
const btnInitial = document.querySelector(".initial");
const btnPause = document.querySelector(".pause");
const btnZero = document.querySelector(".zero");

let seconds = 0;
let timer;

function formatedHoursInSeconds(seconds) {
  const data = new Date(seconds * 1000);

  return data.toLocaleTimeString("pt-BT", {
    hour12: false,
    timeZone: "UTC",
  });
  // 00:00:00
}

function runClock() {
  timer = setInterval(function () {
    seconds++;
    clock.innerHTML = formatedHoursInSeconds(seconds); // -> 00:00:00
  }, 1000);
}
// Forma mais clean;

document.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("initial")) {
    clock.classList.remove("paused");
    clearInterval(timer);
    runClock();
  }
  if (element.classList.contains("pause")) {
    clock.classList.add("paused"); // Vem DO CSS
    clearInterval(timer);
  }
  if (element.classList.contains("zero")) {
    clock.classList.remove("paused"); // VEM DO CSS
    clearInterval(timer);
    clock.innerHTML = "00:00:00"; // Estado de origem
    seconds = 0; // Estado inicial da váriavel
  }
});

// btnInitial.addEventListener("click", function (event) {
//   clock.classList.remove("paused");
//   clearInterval(timer);
//   runClock();
// });

// btnPause.addEventListener("click", function (event) {
//   clock.classList.add("paused");
//   clearInterval(timer);
// });

// btnZero.addEventListener("click", function (event) {
//   clock.classList.remove("paused");
//   clearInterval(timer);
//   clock.innerHTML = "00:00:00";
//   seconds = 0;
// });
