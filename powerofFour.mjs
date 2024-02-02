// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfFour = function(n) {

//     for(let i=0; i<n/2; i++){
//         if(n===4**i){
//             return true
//         }
//     }

//     return false
    
// };

// console.log(isPowerOfFour(1))


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <= 0) {
        return false; // Negative numbers and 0 are not powers of 4
    }

    const logBase4 = Math.log(n) / Math.log(4);

    return Math.floor(logBase4)

    // // Check if the result is an integer
    // return Math.floor(logBase4) === logBase4;
};

console.log(isPowerOfFour(81))