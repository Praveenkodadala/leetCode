/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = [];
  let right = [];
  let pivot = 0;
  let product = 1;
  for (let i = 1; i < nums.length; i++) {
    if (i < pivot) {
      product = product * nums[i];
      left.push(product);
    } else {
      product = product * nums[i];
      right.push(product);
    }
  }

  return tempArray =  [...productExceptSelf(left), ...productExceptSelf(right)];
};

console.log(productExceptSelf([0, 0]));
