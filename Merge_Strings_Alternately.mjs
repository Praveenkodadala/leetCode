/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  let tempArr = [];

  while (i < word1.length && j < word2.length) {
    tempArr.push(word1[i]);
    tempArr.push(word2[j]);
    i++;
    j++;
  }

  while (i < word1.length) {
    tempArr.push(word1[i]);
    i++;
  }
  while (j < word2.length) {
    tempArr.push(word2[j]);
    j++;
  }
  console.log(tempArr);
  return tempArr
};

console.log(mergeAlternately("abc", "pqrmn"));
