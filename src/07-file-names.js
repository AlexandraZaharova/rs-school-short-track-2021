/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  let result = [];
  arr = arr.concat(names);
  result = result.concat(names);
  for (let i = 0; i < result.length; i++) {
    let x = 0;
    arr.forEach((item, index) => {
      if (item === result[i] && index !== i) {
        x++;
        result[index] += `(${x})`;
      }
    });
    arr.shift();
    arr.unshift(0);
  }
  return result;
}

module.exports = renameFiles;
