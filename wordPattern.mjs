/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  console.log(pattern, s);
  if(pattern.length !== s.split(" ").length ) return false

  let sArr = s.split(" ");

  let objP = {};
  for (let i = 0; i < pattern.length; i++) {
    if (objP[pattern[i]]) {
      if (objP[pattern[i]] !== sArr[i]) {
        return false;
      }
    }
    objP[pattern[i]] = sArr[i];
  }

  return true;

};

console.log(wordPattern("abba", "dog cat cat fish"));
