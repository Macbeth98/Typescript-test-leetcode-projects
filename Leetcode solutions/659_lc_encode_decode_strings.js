/**
 * Description
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode
 */

/**
 *
 * @param {string[]} strs
 * @returns {string}
 */
var encode = (strs) => {
  let res = '';

  for (const str of strs) {
    res += str.length + '#' + str;
  }

  return res;
};

/**
 *
 * @param {string} str
 * @returns {string[]}
 */
var decode = (str) => {
  let result = [];
  let i = 0;

  while (i < str.length) {
    j = i;

    while (str[j] != '#') {
      j++;
    }

    length = parseInt(str.slice(i, j));

    let s = str.slice(j + 1, j + 1 + length);
    result.push(s);

    i = j + 1 + length;
  }

  return result;
};

const input = ['lint', 'code', 'love', 'you'];
console.log(input);
const encodedStr = encode(input);
const decoded = decode(encodedStr);
console.log(decoded);
