/**
 * 128. Longest Consecutive Sequence
Medium
15.7K
656
Companies
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!set.has(num - 1)) {
      length = 0;
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// Method 2: Similar but negative

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  let longest = 0;

  if (nums.length === 0) return longest;

  if (nums.length === 1) {
    return 1;
  }

  longest = 1;

  for (const num of nums) {
    if (set.has(num - 1)) {
      length = 2;
      while (set.has(num - length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};

// Method 3: Union Find
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

var longestConsecutive = function (nums) {
  const uf = new UnionFind(nums);
  const map = new Map();

  for (const num of nums) {
    uf.union(num, num + 1);
  }

  let longest = 0;

  for (const num of nums) {
    longest = Math.max(longest, uf.find(num) - num + 1);
  }

  return longest;
};
