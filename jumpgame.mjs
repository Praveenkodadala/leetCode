/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the current index is not reachable, return false
        if (i > maxReach) {
            return false;
        }

        // Update the maximum reachable index
        maxReach = Math.max(maxReach, i + nums[i]);

        // If the last index is reachable, return true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return false;
};
