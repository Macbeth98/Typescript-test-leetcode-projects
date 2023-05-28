/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  let res = nums[0];

  if (nums[l] <= nums[r]) return res;

  while (l <= r) {
    let m = parseInt((l + r) / 2);

    res = Math.min(nums[m], res);

    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return res;
};
