// DLLNodes have a .next and .prev
class DLLNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// DLLists have both a .head and .tail pointer
class DLList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // == Main Methods ==

  // add node before target
  // target is the value of a node in the list
  // consider the edge case where you may have to move the head
  // consider the edge case where you do not find the target
  prepend(target, node) {
    let runner = this.head; // set temp variable runner to head
    let temp;
    while (runner.data !== target) {
      runner = runner.next;
    }
    temp = runner.next; // store address of next node in a temp variable
    runner.next = node; // change runner's next pointer to new node
    node.prev = runner; // set new node's previous pointer to the runner
    node.next = temp; // set new node's next pointer to the temp
    temp.prev = node; // set temp's previous pointer to new node
  }

  // return true or false if a node exists with data === val
  exists(val) { }

  // push to head
  addHead(node) {
    if (!this.head) { // empty list
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }

  // pop from tail
  removeTail() {
    if (this.head == null) return; // empty list
    if (this.head === this.tail) { // one node
      var temp = this.tail; // set a temp
      this.head = null; // disconnect the head
      this.tail = null; // disconnect the tail
      return temp;
    }
    var temp = this.tail; // set a temp
    this.tail = tail.prev; // move the tail back
    this.tail.next = null; // null out the new tail's next
    temp.prev = null; // null out the temp's prev
    return temp;
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

// instantiate the DLL
// add a few nodes
// test!
let dll = new DLList();
let node1 = new DLLNode(40);
let node2 = new DLLNode(30);
let node3 = new DLLNode(20);
let node4 = new DLLNode(10);
let node5 = new DLLNode(25);
dll.addHead(node1);
dll.addHead(node2);
dll.addHead(node3);
dll.addHead(node4);
console.log(dll);
console.log("Size:", dll.size());
console.log("----- Prepend -----");
dll.prepend(30, node5);
console.log(dll);
console.log("Size:", dll.size());