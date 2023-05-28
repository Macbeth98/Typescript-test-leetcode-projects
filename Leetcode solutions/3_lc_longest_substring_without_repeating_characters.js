/**
 * 3. Longest Substring Without Repeating Characters
Medium
33.6K
1.5K
Companies
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let str = '';

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    let index = str.indexOf(c);
    if (index >= 0) {
      result = Math.max(result, str.length);
      str = str.slice(index + 1);
    }
    str += c;
  }

  return Math.max(result, str.length);
};

// Using Sets.
lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let l = 0;
  let max = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, set.size);
  }
  return max;
};
