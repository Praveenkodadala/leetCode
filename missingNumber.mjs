/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (i !== sortedArr[i]) return i;
  }
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
