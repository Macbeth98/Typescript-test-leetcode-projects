/**
 * 
20. Valid Parentheses
Easy
19.7K
1.2K
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  let open_ch = '([{';
  let close_ch = ')]}';

  for (const ch of s) {
    let close_index = close_ch.indexOf(ch);
    if (close_index >= 0) {
      let open = stack.pop();
      if (open_ch.indexOf(open) !== close_index) {
        return false;
      }
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
isValid = function (s) {
  let stack = [];

  for (const ch of s) {
    if (ch === '(') {
      stack.push(')');
    } else if (ch === '[') {
      stack.push(']');
    } else if (ch === '{') {
      stack.push('}');
    } else {
      if (stack.pop() !== ch) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
