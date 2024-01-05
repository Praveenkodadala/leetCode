/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * This way, you iterate through the array in reverse order, starting from the end. Modifying the array from the end ensures that removing elements won't affect the indices of the remaining elements that you still need to check.
 */

var removeElement = function (nums, val) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
          nums.splice(i, 1);
        }
      }
    console.log(nums)
      return nums.length

};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
