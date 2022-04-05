const loginUser = (email, password) => {
  setTimeout(() => {
    console.log("User Logged!");
    return { email };
  }, 1000);
  console.log("After setTimeout");
};

// const user = loginUser("gabriel@gabriel.com", "123456");

// console.log({ user });

// /*
//    -> Saída: After setTimeout
//             { user: undefined }
//             User Logged!
//   -> Nesse caso, o setTimeOut ainda não tinha sido executado, logo o user não foi definido.
// */

// console.log(
//   "/ A primeira forma de resovler o problema é utilizando o callback /"
// );
// const loginUserCallback = (email, password, callback) => {
//   setTimeout(() => {
//     console.log("User Logged!");
//     callback({ email });
//   }, 1000);
//   console.log("After setTimeout");
// };
// const userCallback = loginUserCallback(
//   "gabriel@gabriel.com",
//   "123456",
//   (user) => {
//     console.log("AQUI", user);
//   }
// );

// Promise

const loginUserPromise = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("Error in login"));
    }
    console.log("user logged!");

    resolve({ email });
  });
};

loginUserPromise("gabriel@gmail.com", "123456").then((user) => {
  console.log({ user });
});
/*
  Saída => user logged!
          { user: { email: 'gabriel@gmail.com' } }
*/

// async/Await

const displayUser = async () => {
  try {
    const user = await loginUser("Gabriel@jesus.com", "123456");
    console.log({ user });
    return user;
  } catch (error) {
    console.log(error);
  }
};
