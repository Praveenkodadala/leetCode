/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let result = "";
  
    for (let i = 0; i < str1.length; i++) {
      let tempStr = "";
      for (let j = 0; j < str2.length; j++) {
        if (str1[j + i] !== str2[j]) break;
        if (tempStr.startsWith(str2[j])) break;
        tempStr = tempStr + str2[j];
      }
      if (tempStr.length > result.length){
          result = tempStr;
      } 
    }
  
  console.log("result", result)
  return result
  
  
  };
  console.log(gcdOfStrings("sosas", "sosa"));
  
  