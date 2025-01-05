const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res = 0;
  let numString = n.toString();
  for (let i = 0; i < numString.length; i++) {
    let newNumber = Number(numString.replace(numString[i], ""));
    if (newNumber > res) res = newNumber;
  }

  return res;
}

module.exports = {
  deleteDigit
};
