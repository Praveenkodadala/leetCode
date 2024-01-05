/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //129
  //  1  =   cary+a[i]  0
  let cary = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    // console.log(digits[i])
    let sum =  digits[i]+ cary;
    console.log(sum)
    let tempNum = sum % 10
    console.log('tempNum', tempNum)
    digits[i] = tempNum;
    cary = Math.floor(sum / 10);
    console.log('cary', cary)
    console.log(digits[i]);

    console.log('loop end')
  }
  if(cary>0){
    digits.unshift(1)
  }
  console.log("cary",cary)

  return digits
};

console.log(plusOne([9]));

//   /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function(digits) {
//     if (!digits.length) return undefined;
//     let result = "";
//     let a = [...digits];
//     let carry = 1;
//     for (let i = a.length - 1; i >= 0; i--) {
//       let sum = a[i] + carry;
//       console.log("sum", sum)
//       a[i] = sum % 10;
//       console.log("a[i]", a[i])
//       carry = Math.floor(sum / 10);
//       console.log("Carry", carry)
//       if (carry === 0) {
//         break;
//       }

//       console.log("======loop ends=====")
//     }
//     if (carry > 0) {
//       a.unshift(carry);
//     }
//     return a;
//   };

//   console.log(plusOne([1,2,9]))
