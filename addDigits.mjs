/**
 * @param {number} num
 * @return {number}
 */
/*
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

*/

/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
*/

let n = 3888;
/*
3888 = 3+8 = 11+8 = 19 +8 = 27 
27 = 9
*/

let addDigit = (n)=>{
  let result = Infinity
  let string = String(n)
  while(result>9){
    console.log('is it here')
    let add = 0
    for(let i=0; i<string.length; i++ ){
      console.log('inside for loop')
          add =add+Number(string[i])
          console.log('add', add)
    }
    string = String(add)
    result = add
  }

  return result

}
console.log(addDigit(n))


