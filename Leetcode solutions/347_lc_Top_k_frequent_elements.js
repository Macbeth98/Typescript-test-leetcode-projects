/**
 * 
 * 347. Top K Frequent Elements
Medium
13.3K
484
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const num of nums) {
    let count = map.has(num) ? map.get(num) : 0;
    count++;
    map.set(num, count);
  }

  const result = Array.from(map.keys()).sort((a, b) => map.get(b) - map.get(a));
  console.log(result);

  return result.splice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 3, 3], 2));
// console.log(topKFrequent([1, 2], 2));
