class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    console.log('wt')
    let newNode = new Node(val);
    console.log('adfad')
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
   return this
  }
}

let list = new SinglyLinkedList();
list.push("hi");
list.push("how");
list.push("are");
list.push("you");
console.log(list);
