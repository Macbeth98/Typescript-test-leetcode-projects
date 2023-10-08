/**
 * 74. Search a 2D Matrix
Medium
14.6K
379
Companies
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];

    let l = 0;
    let r = row.length - 1;

    if (target > row[r]) continue;

    while (l <= r) {
      let m = parseInt((l + r) / 2);

      if (row[m] === target) {
        return true;
      } else if (row[m] > target) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return false;
};
