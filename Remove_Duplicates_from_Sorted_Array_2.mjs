var removeDuplicates = function (nums) {
  let k = 0;
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (count < 3) {
      console.log("k", k, "i", i)
      nums[k] = nums[i];
      count++;
      k++
    }
    if (i < nums.length - 1 && nums[i] !== nums[i + 1]) {
        count = 1;
      }
  }
  nums.length = k
  return nums

};

let nums = [1, 1, 1, 1, 2, 2, 2, 3];
removeDuplicates(nums);
