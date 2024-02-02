/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let map1 = new Map();
  for (let num of nums) {
    map1.set(num, (map1.has(num) || 0) + 1);
  }
  const resultArray = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!map1.has(i)) {
      resultArray.push(i);
    }
  }
  return resultArray;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2]
