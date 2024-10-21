let a = [100, 200, 300, 400,500,600,700,800,900, 50, 55, 60, 65, 70, 10, 20, 30, 40, 45, 48, 49];

let flag1 = 0;
let flag2 = 0;
let longest = 1;
let longestSeq = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
      // console.log("a[i]", a[i], i);
      flag2 = i + 1;
      longest = Math.max(longest, flag2 - flag1);
      flag1 = flag2;
      // console.log(flag1, flag2);
    }
    if (i == a.length - 1) {
      longest = Math.max(longest, a.slice(flag2, a.length).length);
    }
  }
  //   console.log("longest", longest);
  return longest;
};

console.log(longestSeq(a));



///

/*
let a = [100, 200, 300, 400, 500, 600, 700, 800, 900, 50, 55, 60, 65, 70, 10, 20, 30, 40, 45, 48, 49];

let longestSeq = (a) => {
  let flag1 = 0;
  let longest = 1;

  for (let i = 1; i < a.length; i++) {
    // If current element is less than the previous one, update flags
    if (a[i] < a[i - 1]) {
      longest = Math.max(longest, i - flag1);
      flag1 = i;
    }
  }

  // Handle the remaining sequence from the last break point
  longest = Math.max(longest, a.length - flag1);
  return longest;
};

console.log(longestSeq(a));


*/
