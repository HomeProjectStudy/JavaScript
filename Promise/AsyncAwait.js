function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min)) + min;
}

function time(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad Value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}
// time("Promise1", rand(0, 3))
//   .then((response) => {
//     console.log(response);
//     return time("Promise2", rand(0, 3));
//   })
//   .then((round) => {
//     console.log(round);
//     return time("Promise3", rand(0, 3));
//   })
//   .then((round) => {
//     console.log("fase 3 - final");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function execute() {
  try {
    const roundOne = await time("fase 1", rand(0, 3));
    console.log(roundOne);
    const roundTwo = await time("fase 2", rand(0, 2));
    console.log(roundTwo);
    const roundThree = await time("fase 3", rand(0, 1));
    console.log(roundThree);
  } catch (error) {
    console.log(error);
  }
}
execute();
