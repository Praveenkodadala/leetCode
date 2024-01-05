// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfTwo = function (n) {
//   let i = 0;
//   while (i < n) {
//     if (2 ** i == n) {
//       return true;
//     }

//     i++;
//   }

//   return false;
// };

// console.log(isPowerOfTwo(16));


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }

    while (n % 2 === 0) {
        n /= 2;
    }

    return n === 1;
};

console.log(isPowerOfTwo(1));  // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(18)); // false

