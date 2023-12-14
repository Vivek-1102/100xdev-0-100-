/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  setTimeout(() => {
    return new Promise((res, rej) => {
      if (n > 1000) {
        console.log("resolve!");
        res();
      } else {
        console.log("reject!");
        rej();
      }
    });
  }, n);
}

wait(1000);
