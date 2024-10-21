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
	return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

var containsNearbyDuplicate = function (nums, k) {
	let map = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (!map.has(nums[i])) {
			map.set(nums[i], i);
		} else {
			let diff = Math.abs(i - map.get(nums[i]));
			if (diff <= k) {
				return true;
			}
		}
	}

	return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
