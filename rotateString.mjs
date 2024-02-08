/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  console.log(s, goal);
  let rotateCount = s.length;
  while (goal !== s && rotateCount !== 1) {
    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (i != s.length - 1) {
        temp = temp + s[i + 1];
      }
      if (i == s.length - 1) {
        let start = s.split("").shift();
        console.log("Start", start);
        temp = temp + start;
      }
    }
    console.log(temp);
    s = temp;
    rotateCount--;
  }

  return s == goal;
};

console.log(rotateString("abcde", "cdeab"));
