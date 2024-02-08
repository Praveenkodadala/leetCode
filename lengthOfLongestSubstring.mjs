/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
 * @param {string} s
 * @return {number}
 */
//

// var lengthOfLongestSubstring = function (s) {
//   if (!s.length) return 0;
//   let map1 = new Map();
//   let maxLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (map1.has(s[i])) {
//       let flag = i + 1;
//       maxLength = Math.max(flag - (map1.get(s[i]) + 1), maxLength);
//       console.log("max length", maxLength);
//     }

//     map1.set(s[i], i);
//   }

//   console.log(map1);
//   return maxLength;
// };

// console.log(lengthOfLongestSubstring("dvdb"));


var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let map = new Map();
    let maxLength = 0;
    let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= startIndex) {
            startIndex = map.get(s[i]) + 1;
            console.log("St", startIndex)
        }
        map.set(s[i], i);
        console.log("i", i+1, "startIndex", startIndex)
        maxLength = Math.max(maxLength, (i+1) - startIndex);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("dvdb")); // Output: 3

