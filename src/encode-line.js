const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = [];
	let counter = 0;
	let letter = '';

	for (let i = 0; i < str.length; i += 1) {
		if (letter !== str[i]) {
			if (counter !== 0){
				res.push(`${counter === 1 ? '' : counter}${letter}`);
			}

			letter = str[i];
			counter = 1;
		} else {
			counter += 1;
		}
	}

	if (counter !== 0){
		res.push(`${counter === 1 ? '' : counter}${letter}`);
	}

	return res.join('')
}

module.exports = {
  encodeLine
};
