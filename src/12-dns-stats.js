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
  const result = {};
  let arr = [];
  arr = arr.concat(domains);
  for (let i = 0; i < arr.length; i++) {
    const arrNew = arr[i].split('.').reverse();
    let x = `.${arrNew[0]}`;
    while (arrNew.length) {
      if (x in result) {
        result[x] += 1;
      } else result[x] = 1;
      arrNew.shift();
      if (arrNew.length) {
        x += `.${arrNew[0]}`;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
