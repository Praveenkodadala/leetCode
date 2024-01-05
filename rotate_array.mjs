/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  if (nums.length === 0) return; // Nothing to rotate
  k = k % nums.length;
  console.log("k", k);
  if (k === 0) return; // No need to rotate
  let tempArr = [];
  for (var i = nums.length - k; i < nums.length; i++) {
    tempArr.push(nums[i]);
  }
  for (var i = 0; i < nums.length - k; i++) {
    tempArr.push(nums[i]);
  }
  console.log(tempArr);

  for(let i=0; i<nums.length; i++){
    nums[i] = tempArr[i]
  }

  console.log(nums)
return nums

};
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 11);
