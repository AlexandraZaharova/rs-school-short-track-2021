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
  const result = String(n).split('');
  let arr = [];
  arr = arr.concat(result);
  arr.sort((a, b) => a - b);
  if (arr[0] !== 0) {
    result.splice(result.indexOf(arr[0]), 1);
  } else {
    result.splice(result.indexOf(arr[1]), 1);
  }
  return +result.join('');
}

module.exports = deleteDigit;
