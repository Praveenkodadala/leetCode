/**
 * Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 * @param {string} s
 * @return {string}
 */

/*
var frequencySort = function (s) {
  console.log("S", s);
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  console.log(map)
 let tempArr = Array.from(map);
 console.log("tempArr", tempArr)
tempArr.sort((a, b) => b[1] - a[1]);
console.log("tempArr here", tempArr)
let result = "";
for (let [char, freq] of tempArr) {
    for (let i = 0; i < freq; i++) {
      result += char;
    }
  }
 return  result


};

console.log(frequencySort("cccaaa"));
*/

var frequencySort = function (s) {
	let sMap = new Map();

	for (let char of s) {
		sMap.set(char, (sMap.get(char) || 0) + 1);
	}

	let sortedByValue = new Map([...sMap.entries()].sort((x, y) => y[1] - x[1]));

	let result = "";

	for (let [key, value] of sortedByValue) {
		result += key.repeat(value);
	}

	return result;
};

console.log(frequencySort("treeeeewwwwgssddd"));
