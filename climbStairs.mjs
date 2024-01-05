/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

var inputFunc = (x)=>{
  return climbStairs(x+1)
}

console.log(inputFunc(4))

