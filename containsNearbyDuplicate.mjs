/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let obj = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (obj.has(nums[i])) {
      if (Math.abs(obj.get(nums[i]) - i) <= k) {
        return true;
      }
    }
    obj.set(nums[i], i);
  }

  return false

};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
