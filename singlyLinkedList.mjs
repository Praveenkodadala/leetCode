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
    let newNode = new Node(val);
    console.log("newNode", newNode);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    console.log("current", current);
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;

    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.length--;
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (index !== counter) {
      current = current.next;
      counter++;
    }
    console.log(current);
    return current;
  }
  set(index, val) {
    let newNode = new Node(val);
    if (index < 0 || index > this.length) return null;
    if (index == this.length) return !!this.push(val);
    if (index == 0) return !!this.unshift(val);
    let currentNode = this.get(index);
    let previousNode = this.get(index - 1);
    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;
    return true; // or return this
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index == this.length - 1) return !!this.pop();
    if (index == 0) return !!this.shift();
    let currentNode = this.get(index);
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = currentNode.next;
    this.length--;
    return removed;
  }
  reverse() {
    // 1-> 2-> 3
    // tail 1<- 2 <-3head
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let next = null;
    let prev = null;
   let i = 0;
    while (i < this.length) {
      //2
      //3

      let next = currentNode.next;
      console.log("next", next);
      currentNode.next = prev;
      console.log("currntnode.next", currentNode.next)
      prev = currentNode;
      currentNode = next;

      console.log("========");
      i++;
    }
  }
}

let list = new SinglyLinkedList();
console.log(list);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list);
// // console.log(list.pop())
// console.log(list.unshift("hello"));
// console.log(list.shift());
// list.get(3);
// console.log(list.set(2, "set"));
console.log(list);
console.log(list.reverse())
