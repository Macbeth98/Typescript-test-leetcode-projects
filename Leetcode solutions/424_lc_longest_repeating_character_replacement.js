/**
 * 424. Longest Repeating Character Replacement
Medium
7.9K
335
Companies
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let charCounts = {};

  let l = 0,
    r = 0;

  let result = 0;

  let maxF = 0;

  while (r < s.length) {
    let c = s[r];
    charCounts[c] = charCounts[c] ? charCounts[c] + 1 : 1;
    let length = r - l + 1;

    maxF = Math.max(maxF, charCounts[c]);

    // let replaceCount = length - Math.max(...Object.values(charCounts));
    let replaceCount = length - maxF;

    while (replaceCount > k) {
      c = s[l];
      charCounts[c] = charCounts[c] - 1;
      l++;
      length = r - l + 1;
      // replaceCount = length - Math.max(...Object.values(charCounts));
      replaceCount = length - maxF;
    }

    result = Math.max(result, length);

    r++;
  }

  return result;
};
