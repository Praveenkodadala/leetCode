/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  let obj1 = new Map();
  let obj2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!obj1.has(s[i])) {
      obj1.set(s[i], t[i]);
    } else {
      if (obj1.get(s[i]) != t[i]) {
        return false;
      }
    }

    if (!obj2.has(t[i])) {
      obj2.set(t[i], s[i]);
    } else {
      if (obj2.get(t[i]) != s[i]) {
        return false;
      }
    }
  }

  console.log(obj1);
  return true;
};

console.log(isIsomorphic("badc", "baba"));
