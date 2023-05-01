/**
 * 217. Contains Duplicate
Easy
8.9K
1.1K
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let setNums = new Set(nums);

  return nums.length > setNums.size;

  // let seenMap = new Map();

  // for (const num of nums) {
  //     if(seenMap.has(num)) {
  //         return true;
  //     }

  //     seenMap.set(num, true)
  // }

  // return false;
};
