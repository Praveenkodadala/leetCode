// ,,//let a = ,[],,

let binarySearch = (a, elm) => {
  console.log(a, elm);
  let start = 0;
  let end = a.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log(start, end, middle);
  while (a[middle] !== elm && start <= end) {
    if (elm < a[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log("Middle", middle);
  if (a[middle] == elm) {
    return middle;
  } else {
    return -1;
  }
};

console.log(binarySearch([4, 5, 8, 9, 77, 85, 99], 1));
