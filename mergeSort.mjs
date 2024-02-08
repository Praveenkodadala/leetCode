//for the merge sort we have find the way to merge 2 sorted arrays
//recursion
//divide and conquer

let merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    //push remaining elements of arr1
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    //push remaining elements of arr2
    result.push(arr2[j]);
    j++;
  }
  console.log(result);
  return result;

  
};
// console.log(merge([3, 5, 9], [1, 2, 4]));

let mergeSort = (a) => {
if(a.length<=1) return a

let mid = Math.floor((a.length)/2)
let left =  mergeSort(a.slice(0, mid))
let right  = mergeSort(a.slice(mid))
// console.log(left, right)
return merge(left, right)


};
console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
