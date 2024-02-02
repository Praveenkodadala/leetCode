/**
 * @param {string} s
 * @return {number}
 */

/*
var longestPalindrome = function (s) {
    //cbdbc     //count numbers and take one odd num in midle and evens in left and right
    if(s.length ==1)return 1
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    //find one odd num
    let foundOdd = false;
    let count = 0;
   
  
    for (let [key, value] of map) {
      
      if (value % 2 !== 0) {
        foundOdd = true;
      } else {
        count = count + value;
      }
      
    }
 
  
    if (foundOdd) {
      count++;
    }else{
          return 0
    }
  
    return count;
  };
  
  console.log(longestPalindrome("abccccdd"));
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // Count the occurrences of each character
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let count = 0;
  let hasOdd = false;

  for (let value of map.values()) {
    count += Math.floor(value / 2) * 2;

    if (value % 2 !== 0) {
      hasOdd = true;
    }
  }

  if (hasOdd) {
    count++;
  }

  return count;
};

console.log(longestPalindrome("abccccdd"));
