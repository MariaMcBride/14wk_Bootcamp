// DLLNodes have a .next and .prev
class DLLNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// DLLists have both a this.head and this.tail pointer
class DLList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // == Main Methods ==

  // push to head
  // myDll.addHead(new DLLNode(33));
  // push to head
  addHead(node) {
    // edge case to check if empty
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node; // head's previous points to new node
      node.next = this.head; // new node's next pointer points to head
      this.head = node; // change the head to the new node
    }
    return this;
  }

  // pop from tail
  removeTail() {
    // edge case to check if empty
    if (this.isEmpty())
      return;
    if (this.head === this.tail) {
      let tempNode = this.tail; // create temp variable
      // disconnect pointers
      this.head = null;
      this.tail = null;
      return tempNode;
    }
    let tempNode = this.tail; // create temp variable
    this.tail = this.tail.prev;
    this.tail.next = null;
    tempNode.prev = null;
    return tempNode;
  }

  // return is empty
  isEmpty() {
    return this.head === null;
  }

  // return length
  size() {
    let count = 0;
    let runner = this.head;
    while (runner) {
      count++;
      runner = runner.next;
    }
    return count;
  }

  // == Bonus Methods, just inverted versions of the first set ==

  // push to tail
  addTail(node) {
    // edge case to check if empty
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    return this;
  }

  // pop from head
  removeHead() {
    // edge case to check if empty
    if (this.isEmpty()) {
      return null;
    }
    let tempNode = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    tempNode.next = null;
    return tempNode;
  }
}

// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?
let dll = new DLList();
console.log("-------- Add Head/Add Tail --------");
dll.addHead(new DLLNode(1)).addTail(new DLLNode(3)).addHead(new DLLNode(2)).addTail(new DLLNode(4));
console.log(dll);
console.log("Size:", dll.size());
console.log("----- Remove Head/Remove Tail -----");
console.log(dll.removeHead());
console.log(dll.removeTail());
console.log(dll);
console.log("Size:", dll.size());