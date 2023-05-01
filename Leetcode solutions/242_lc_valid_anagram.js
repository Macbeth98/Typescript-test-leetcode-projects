/**
 * 
 * 242. Valid Anagram
Easy
8.8K
284
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sMap = new Map();
  let tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    let s1 = s[i];
    let t1 = t[i];
    let count = sMap.has(s1) ? sMap.get(s1) : 0;
    count++;
    sMap.set(s1, count);

    count = tMap.has(t1) ? tMap.get(t1) : 0;
    count++;
    tMap.set(t1, count);
  }

  for (let [key, value] of sMap) {
    if (tMap.get(key) !== value) return false;
  }

  return true;
};
