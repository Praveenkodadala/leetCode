/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(s.length < 2) return s
  let map1 = new Map();

  let startFlag = 0;
  let maxLength = 0;
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (map1.has(s[i]) && map1.get(s[i]) >= startFlag) {
      startFlag = map1.get(s[i]);
      console.log("startFlag", startFlag);
      console.log("i here", i + 1);
      let tempStr = s.slice(startFlag, i + 1);
      console.log("tempStr", tempStr);
      let reverse = tempStr.split("").reverse().join("");
      console.log("reverse", reverse);
      if (tempStr === reverse) {
        maxLength = Math.max(tempStr.length, maxLength);
        if (tempStr.length >= maxLength) {
          result = tempStr;
        }
      }
    }
    map1.set(s[i], i);
  }

  console.log(maxLength);
  return result;
};

console.log(longestPalindrome("babad"));
