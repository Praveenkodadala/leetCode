/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  num = String(num);

  while (Number(num) >= 10) {
    let add = 0;
    for (let i = 0; i < num.length; i++) {
      console.log(num[i]);
      add = add + Number(num[i]);
    }
    console.log("add", add, typeof add);
    num = String(add);
  }

  return Number(num);
};

console.log(addDigits(38));
