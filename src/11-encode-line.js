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
  let result = '';
  if (str.length === 0) {
    result += '';
  } else {
    const arr = str.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[0]) {
        count += 1;
      } else break;
    }
    if (count > 1) {
      result += count + arr[0];
    } else result += arr[0];
    arr.splice(0, count);
    const str1 = arr.join('');
    result = str1.length === 0 ? result : result + encodeLine(str1);
  }
  return result;
}

module.exports = encodeLine;
