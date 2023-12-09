/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  lowerCaseStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  backwardStr = lowerCaseStr.split("").reverse().join("");
  console.log(lowerCaseStr);

  if (lowerCaseStr === backwardStr || (str.length = 0)) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("Able, was I ere I saw Elba!");
module.exports = isPalindrome;
