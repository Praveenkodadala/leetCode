/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  n = String(n);

  let obj = new Set();

  while (true) { 
    let squareResult = 0;
    for (let i = 0; i < n.length; i++) {
      squareResult = squareResult + parseInt(n[i]) ** 2;
    }
    n = String(squareResult);
    if (Number(n) == 1) return true;
    if (!obj.has(Number(n))) {
      obj.add(Number(n));
    } else {
      return false;
    }

  }
  
};

console.log(isHappy(19));
