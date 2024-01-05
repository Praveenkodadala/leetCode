/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;
  let obj = new Map();
  for (let i = 0; i < alpha.length; i++) {
    obj.set(alpha[i], i + 1);
  }
  console.log(obj);
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + obj.get(columnTitle[i]);
  }
  console.log(result);
  return result
};

console.log(titleToNumber("ZY"));
