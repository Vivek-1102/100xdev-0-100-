/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let count = -1;
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= vowels.length; j++) {
      if (vowels[j] == str[i]) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

// countVowels("abAcd");

module.exports = countVowels;
// abcdefghijklmnopqrsADFETtuvwxyz
