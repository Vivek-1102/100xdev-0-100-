/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

// 1. typeof is used to check the expression is having only int data type.
// 2. eval() is used to calculate the answer of the integer type expression.
// 3. throw error for invalid input and for Infinity.
// 4. replace is used to neglect multiple spaces.
class Calculator {
  constructor() {
    // Constructor
    this.result = 0;
  }
  add(a) {
    if (typeof a === "number") {
      this.result += a;
    } else {
      throw console.error(err);
    }
  }
  subtract(b) {
    if (typeof b === "number") {
      this.result -= b;
    } else {
      throw console.error(err);
    }
  }
  multiply(c) {
    if (typeof c === "number") {
      this.result *= c;
    } else {
      throw console.error(err);
    }
  }
  divide(d) {
    if (typeof d === "number" && d !== 0) {
      this.result /= d;
    } else if (d == 0) {
      throw console.error(err);
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
  calculate(expression) {
    let answer = eval(expression.replace(/\s+/g, ""));
    this.result = answer;
    if (this.result == Infinity) {
      throw console.error(err);
    } else {
      return this.result;
    }
  }
}

module.exports = Calculator;
