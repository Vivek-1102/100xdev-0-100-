/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let maxNumber = numbers[0];
  for (i = 0; i <= numbers.length; i++) {
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }
  console.log(maxNumber);
  return maxNumber;
}
module.exports = findLargestElement;
