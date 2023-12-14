// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function firstPromise() {
  let p = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Timeout fun call!");
      res("hey there");
      console.log(p);
    }, 3000);
  });

  return p;
}

// firstPromise().then((data) => {
//   console.log(data);
// });

async function hello() {
  let ans = await firstPromise();
  console.log(ans);
}

hello();
