// /**
//  * @param {number[]} nums
//  * @return {string[]}
//  */
// var summaryRanges = function (nums) {
//   let result = [];

//   let tempArr = [];
//   let flag = 1;
//   for (let i = 1; i < nums.length; i++) {
//     tempArr.push(nums[i - 1]);
//     if (nums[i] - nums[i - 1] != 1) {
//       console.log(nums[i]);
//       console.log("i", i);
//       result.push(tempArr);
//       tempArr = [];
//       flag = i;
//     }
//     if (i == nums.length - 1) {
//       console.log("flag", flag);
//       result.push(nums.splice(flag));
//     }
//   }

//   console.log(result);



// };

// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));


var summaryRanges = function (nums) {
    if (nums.length === 0) return [];
  
    let result = [];
    let start = nums[0];
  
    for (let i = 1; i <= nums.length; i++) {
      if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
        result.push(getRangeString(start, nums[i - 1]));
        if (i < nums.length) {
          start = nums[i];
        }
      }
    }
  
    return result;
  };
  
  function getRangeString(start, end) {
    if (start === end) {
      return start.toString();
    } else {
      return start + '->' + end;
    }
  }
  
  // Example usage:
  console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
  
