/**
 * 15. 3Sum
Medium
25.3K
2.3K
Companies
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
Accepted
2.6M
Submissions
8M
Acceptance Rate
32.6%
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const triplets = [];

  if (nums.length < 3) return triplets;

  let prevA = null;

  const target = 0;

  for (let i = 0; i <= nums.length - 3; i++) {
    let a = nums[i];

    if (a > 0) {
      break;
    }

    if (a === prevA) {
      continue;
    }

    prevA = a;

    left = i + 1;
    right = nums.length - 1;

    let prevB = null;

    while (left < right) {
      let b = nums[left];
      let c = nums[right];

      if (b === prevB) {
        left++;
        continue;
      } else {
        prevB = null;
      }

      let sum = a + b + c;

      if (sum === target) {
        triplets.push([a, b, c]);
        left++;
        right--;

        prevB = b;
        prevC = c;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
};
