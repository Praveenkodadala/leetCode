// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//     let tempArr = [];
//     let i = 0;
//     let j = 0;
//     while (i < list1.length && j < list2.length) {
//       if (list1[i] <= list2[j]) {
//         tempArr.push(list1[i]);
//         i++;
//       } else {
//         tempArr.push(list2[j]);
//         j++;
//       }
//     }
//     while (i < list1.length) {
//       tempArr.push(list1[i]);
//       i++;
//     }
//     while (j < list2.length) {
//       tempArr.push(list2[j]);
//       j++;
//     }
//     console.log(tempArr);
//     return tempArr
//   };

//   console.log(mergeTwoLists([1,2,4], [1,3,4]))

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}


let list = new ListNode()

console.log(list)