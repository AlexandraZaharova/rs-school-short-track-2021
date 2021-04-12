/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = '';
  let email1 = email;
  let x = email1.indexOf('@');
  while (x !== -1) {
    result = email1.slice(x + 1);
    email1 = result;
    x = email1.indexOf('@');
  }
  return result;
}

module.exports = getEmailDomain;
