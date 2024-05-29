// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// Callback Hell
// saveToDb(
//   "Shadab Hasan Hakimi",
//   () => {
//     console.log("Success: Your data was saved!");
//     saveToDb(
//       "Hello World!",
//       () => {
//         console.log("Success: Your data was saved!");
//         saveToDb(
//           "Hello World!",
//           () => {
//             console.log("Success: Your data was saved!");
//           },
//           () => {
//             console.log("Failure: Weak connection! Data not saved.");
//           }
//         );
//       },
//       () => {
//         console.log("Failure: Weak connection! Data not saved.");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: Weak connection! Data not saved.");
//   }
// );

// Promises: The promise object represents the eventual completion(or failure) of an asynchronous operation and its resulting vaLue

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success: Data was successfully saved!");
    } else {
      reject("Failure: Data save failed!");
    }
  });
}

// let request = saveToDb("Shadab");   //request is promise object

// request.then(() => {
// or
// saveToDb("shadab")
// .then(() => {
//   console.log("Promise was resolved!");
// })
// .catch(() => {
//   console.log("Promise was rejected!");
// });

// promise chaining
// saveToDb("Shadab Hasan Hakimi...")
// .then(() => {
//   console.log("Success1!");
//   saveToDb("Hello World!")
//   .then(() => {
//     console.log("Success2!");
//   })
// })
// .catch(() => {
//   console.log("Failure!");
// });

// improved version
// saveToDb("Shadab")
// .then(() => {
//   console.log("Success1!");
//   return saveToDb("Hasan");
// })
// .then(() => {
//   console.log("Success2!");
//   return saveToDb("Hakimi");
// })
// .then(() => {
//   console.log("Success3!");
// })
// .catch(() => {
//   console.log("Failure!");
// });

// Now there is no callback hell

// result and error in promises
// saveToDb("Shadab")
// .then((result) => {
//   console.log("Success1!");
//   console.log(result);
//   return saveToDb("Hasan");
// })
// .then((result) => {
//   console.log("Success2!");
//   console.log(result);
//   return saveToDb("Hakimi");
// })
// .then((result) => {
//   console.log("Success3!");
//   console.log(result);
// })
// .catch((error) => {
//   console.log("Failure!");
//   console.log(error);
// });

// one more example
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed!")
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("Red done!");
    return changeColor("orange", 1000);
  })
  .then(() => {
    console.log("Orange done!");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("Green done!");
  });

  // We can skip catch if the code is not expected to give an error
