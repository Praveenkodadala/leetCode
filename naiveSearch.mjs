//naive search
//loop over str1 and str2
// if the characters does not match, break out of the inner loop
// if the characters do match, keep going
//if you complete inner loop and find match, increment the count
//return count

let naiveSearch = (long, short) => {
  let count = 0;
  let positionArr = [];
  for (let i = 0; i < long.length; i++) {
    let start = i;
    for (let j = 0; j < short.length; j++) {
      // console.log(long[i], short[j])
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j == short.length - 1) {
        count++;
        positionArr.push(i);
      }
    }
  }
  return count
};

let result = naiveSearch("fdfdabracadabra", "abra");
console.log(result)
