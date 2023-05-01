/**
 * 125. Valid Palindrome
Easy
6.6K
6.9K
Companies
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let regex = /[a-zA-Z0-9]/;

  if (s.length <= 1) return true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let charLeft = s[left].toLowerCase();
    let charRight = s[right].toLowerCase();

    if (!regex.test(charLeft)) {
      left++;
    } else if (!regex.test(charRight)) {
      right--;
    } else {
      if (charLeft !== charRight) {
        return false;
      }

      left++;
      right--;
    }
  }

  return true;
};

isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};
