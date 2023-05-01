/**
 * 49. Group Anagrams
Medium
15K
433
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagramsMap = new Map();

  for (const str of strs) {
    let s = str.split('').sort().join('');

    if (anagramsMap.has(s)) {
      anagramsMap.get(s).push(str);
    } else {
      anagramsMap.set(s, [str]);
    }
  }

  return Array.from(anagramsMap.values());
};

var groupAnagramsMethod2 = function (strs) {
  let anagramsMap = {};

  for (const str of strs) {
    let s = str.split('').sort().join('');

    if (anagramsMap[s]) {
      anagramsMap[s].push(str);
    } else {
      anagramsMap[s] = [str];
    }
  }

  return Object.values(anagramsMap);
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
