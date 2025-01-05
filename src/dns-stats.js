const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counts = {};
	const domainArr = domains.map(elem => elem.split(".").reverse());

	for (let i = 0; i < domainArr.length; i += 1) {
		for (let j = 0; j < domainArr[i].length; j += 1){
			let domain = "";
			for (let k = 0; k <= j; k += 1){
				domain += "." + domainArr[i][k];
			}

			if (counts[domain] !== undefined){
				counts[domain] = counts[domain] + 1;
			} else {
				counts[domain] = 1;
			}
		}
  };

	return counts;
}

module.exports = {
  getDNSStats
};
