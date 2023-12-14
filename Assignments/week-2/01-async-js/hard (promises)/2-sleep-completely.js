/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds, a) {
  return setTimeout(() => {
    for (let i = 0; i <= 10; i++) {
      a += i;
    }
    console.log(a);
    return a;
  }, seconds * 1000);
}
sleep(3, 0);
