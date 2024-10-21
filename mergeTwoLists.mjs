class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class List {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
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
}

let listOne = new List();
listOne.push(1); //1,2,4
listOne.push(2);
listOne.push(4);
// console.log(listOne)
let listTwo = new List(); //1,3,4
listTwo.push(1);
listTwo.push(3);
listTwo.push(4);
// console.log(listTwo)

let mergeTwoLists = (listOne, listTwo) => {
	console.log("listOne here", listOne);
	console.log("list Two", listTwo);

	let newNode = new Node(0);
    let current = newNode;

	let p1 = listOne.head;
	let p2 = listTwo.head;

	while (p1 != null && p2 != null) {
        if(p1.val<p2.val){
            current.next = p1
            p1 = p1.next

        }else{
            current.next = p2
            p2 = p2.next
        }
        current = current.next
    }

	// If there are remaining nodes in either list, append them
	if (p1 !== null) {
		current.next = p1;
	} else {
		current.next = p2;
	}

	// Return the head of the merged list
	//return newNode.next; // This skips the dummy node

    let mergedNode = newNode.next
 
    let currentNode = mergedNode
     console.log("current nodee hererere", currentNode)
    let result = []
    while(currentNode.next){
        console.log(currentNode.val,)
        result.push(currentNode.val)
        currentNode = currentNode.next
    }

    return result


};
console.log(mergeTwoLists(listOne, listTwo));
