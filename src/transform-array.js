const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const arrCopy = [...arr];
  arrCopy.forEach((elem, index) => {
    if (elem === '--discard-next') {
        if (arrCopy[index + 1] !== undefined) {
          arrCopy[index + 1] = undefined;
        }
        arrCopy[index] = undefined;
      }
        else if (elem === '--discard-prev') {
        if (arrCopy[index - 1] !== undefined) {
          arrCopy[index - 1] = undefined;
        }
        arrCopy[index] = undefined;
      }
        else if (elem === '--double-next') {
        if (arrCopy[index + 1] !== undefined) {
          arrCopy[index] = arrCopy[index + 1];
        } else {
          arrCopy[index] = undefined;
        }
      }
        else if (elem === '--double-prev') {
        if (arrCopy[index - 1] !== undefined) {
          arrCopy[index] = arrCopy[index - 1];
        } else {
          arrCopy[index] = undefined;
        }
      }
  });
  return arrCopy.filter((elem) => elem !== undefined);
}

module.exports = {
  transform
};
