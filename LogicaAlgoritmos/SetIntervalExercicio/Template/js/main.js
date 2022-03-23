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
}

function runClock() {
  timer = setInterval(function () {
    seconds++;
    clock.innerHTML = formatedHoursInSeconds(seconds);
  }, 1000);
}
// Forma mais clean;

document.addEventListener("click", function (event) {
  const elemet = event.target;
  if (elemet.classList.contains("initial")) {
    clock.classList.remove("paused");
    clearInterval(timer);
    runClock();
  }
  if (elemet.classList.contains("pause")) {
    clock.classList.add("paused");
    clearInterval(timer);
  }
  if (elemet.classList.contains("zero")) {
    clock.classList.remove("paused");
    clearInterval(timer);
    clock.innerHTML = "00:00:00";
    seconds = 0;
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
