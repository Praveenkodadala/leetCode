/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
        let jumpCount = 0
        let maxReach = 0
        let jumpEnd = 0
    for (let i = 0; i < nums.length-1; i++) {
         maxReach = Math.max(maxReach, i+nums[i])
        if(i===jumpEnd){
            jumpCount++
            jumpEnd = maxReach
        }
    }

    return jumpCount;
};

// Test cases
//console.log(jump([2, 3, 1, 1, 4]));  // Output: 2
 //console.log(jump([2, 3, 0, 1, 4]));  // Output: 2
 console.log(jump([1, 1, 1, 1]));     // Output: 3
//console.log(jump([0]));              // Output: 0
