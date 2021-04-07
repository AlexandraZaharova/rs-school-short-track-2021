/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const letter = ['A', 'B', 'C', 'D', 'E', 'F'];
  const arr = n.split('-');
  if (arr.length > 6) {
    return false;
  }
  const result = arr.every((item) => {
    const a = item.split('');
    let x;
    if (a.length === 2 && (a[0] < 10 || a[0] > -1 || letter.some((elem) => elem === a[0]))
      && (a[1] < 10 || a[1] > -1 || letter.some((elem) => elem === a[1]))) {
      x = true;
    } else {
      x = false;
    }
    return x;
  });
  return result;
}

module.exports = isMAC48Address;
