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
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
};

var threeSum2 = function (nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  const triplets = [];

  for (let i = 0; i <= nums.length - 3; i++) {
    let a = nums[i];

    if (a > 0) break;

    if (a === nums[i - 1]) continue;

    let target = -a;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let b = nums[left];
      let c = nums[right];

      let sum = b + c;

      if (sum === target) {
        triplets.push([a, b, c]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
};

console.log(threeSum2([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum2([0, 1, 1])); // []
console.log(threeSum2([0, 0, 0])); // [[0,0,0]]
console.log(threeSum2([3, -2, 1, 0])); // []

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumNoDuplicates = function (nums) {
  let map = {};

  for (const num of nums) {
    map[num] = map[num] + 1 || 1;
  }

  let triplets = [];
  let triplets_hash = {};

  let target = 0;

  let a, b, c;

  let left = 0;
  let right = 1;

  while (right < nums.length) {
    b = nums[left];
    c = nums[right];

    a = target - (b + c);

    let count = map[a];

    if (count) {
      if (a === b) count--;
      if (a === c) count--;

      if (count < 1) {
        left++;
        right++;
        continue;
      }

      let triplet = [a, b, c];
      let triplet_hash = triplet.sort().join(',');
      if (!triplets_hash[triplet_hash]) {
        triplets_hash[triplet_hash] = 1;
        triplets.push(triplet);
      }
    }

    left++;
    right++;
  }

  return triplets;
};
