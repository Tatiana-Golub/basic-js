const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  let result = '';

  for (let i = 0; i < repeatTimes; i += 1) {
    let part = String(str);
    if (addition !== '') {
      for (let j = 0; j < additionRepeatTimes; j += 1) {
        if (j > 0) {
          part += additionSeparator;
        }
        part += String(addition);
      }
    }
    if (i > 0) {
      result += separator;
    }
    result += part;
  }
  return result;
}

module.exports = {
  repeater
};
