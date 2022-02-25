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

  // return true or false if the current linked list is a palindrome
  // a palindrome is a string of characters equal to itself when reversed
  // assume your node.data are all numbers or lowercase chars
  isPalindrome() {
    let left = this.head;
    let right = this.tail;
    if (!this.head) // edge case - if empty flag is false
      return false;
    while (left && right) { // while not empty, loop runs
      return (left.data != right.data) ?
        false : true; // if left is not equal to right, it's false else true
    } // pointers move closer to each other
    left = left.next;
    right = right.prev;
    return true;
  }

  // reverse a doubly linked list in place
  reverse() {
    let current = this.head; // set current to first node
    let prev, next; // create prev and next with a value of null
    while (current) { // while not empty, loop runs and swaps prev and next
      next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
    // // set current and runner variables to first node
    // let current = this.head;
    // let runner = this.head;
    // while (runner.next) { // while next is not empty, loop runs
    //   runner = runner.next;
    // }
    // // swap head and tail data
    // while (current !== runner && current.prev !== runner) {
    //   let temp = current.data;
    //   current.data = runner.data;
    //   runner.data = temp;
    //   current = current.next;
    //   runner = runner.prev;
    // }
    return this.head;
  }
  // ---------------------------

  // remove and return the first node with data === val, if it exists
  // what if the list is empty?
  // what if the target val is the head?
  // what if the target val is the tail?
  // what if the target val is the only node in the list?
  removeVal(val) {

  }

  // add node before target
  // target is the value of a node in the list
  // consider the edge case where you may have to move the head
  // consider the edge case where you do not find the target
  prepend(target, node) {
    if (this.head !== null) { // Must have at least one node
      var curNode = this.head;
      if (curNode.data === target) { // Edge case: first node only
        node.next = curNode; // Connect nodes
        curNode.prev = node;
        this.head = node; // Move this.head to new node
      } else {
        while (curNode.next !== null) {
          curNode = curNode.next; // Move to next node
          if (curNode.data === target) {
            // Link this new node to the others
            node.next = curNode;
            node.prev = curNode.prev;
            // Link other nodes to this new node
            curNode.prev.next = node;
            curNode.prev = node;
            return; // Exit while loop assuming only before first instance of target
          }
        }
      }
    }
  }

  // 1. readability
  // 2. correct output
  // 3. performance
  // 4. refactoring/code cleaniness

  // cleaner, less indented
  prependClean(target, node) {
    var runner = this.head; // set a runner
    if (runner.data === target) {
      this.addHead(node);
      return;
    }
    while (runner) { // loop
      if (runner.data !== target) { // check runner data against the target
        runner = runner.next;     // move forward if no match
      } else {                      // else we found a match
        node.next = runner;       // point the node at the matched runner
        node.prev = runner.prev;  // point the node's prev to the matched runner's prev
        node.prev.next = node;    // link previous node next
        runner.prev = node;       // link runner to node
        return;
      }
    }
  }

  // BONUS
  append(target, node) { }

  // return true or false if t a node exists with data === val
  exists(val) {
    var forwardRunner = this.head;
    var backwardRunner = this.tail;
    var count = Math.ceil(this.length / 2);
    while (count) {
      if (forwardRunner.data === val || backwardRunner.data === val) {
        return true;
      }
      forwardRunner = forwardRunner.next;
      backwardRunner = backwardRunner.prev;
      count--;
    }
    return false;
  }

  // push to head
  addHead(node) {
    if (!this.head) { // empty list
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;

      // this.tail.next = node;
      // node.prev = this.tail;
      // this.tail = node;
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
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)

let dll1 = new DLList();
let dll2 = new DLList();
let dll3 = new DLList();
console.log("-------- Palindrome --------");
dll1.addHead(new DLLNode("t"));
dll1.addHead(new DLLNode("a"));
dll1.addHead(new DLLNode("c"));
dll1.addHead(new DLLNode("o"));
dll1.addHead(new DLLNode("c"));
dll1.addHead(new DLLNode("a"));
dll1.addHead(new DLLNode("t"));
dll2.addHead(new DLLNode("t"));
dll2.addHead(new DLLNode("a"));
dll2.addHead(new DLLNode("c"));
dll2.addHead(new DLLNode("o"));
dll2.addHead(new DLLNode("c"));
dll2.addHead(new DLLNode("a"));
dll2.addHead(new DLLNode("r"));
console.log(dll1);
console.log("isPalindrome:", dll1.isPalindrome());
console.log(dll2);
console.log("isPalindrome:", dll2.isPalindrome());
console.log("---------- Reverse ---------");
dll3.addHead(new DLLNode(10));
dll3.addHead(new DLLNode(20));
dll3.addHead(new DLLNode(30));
dll3.addHead(new DLLNode(40));
console.log(dll3);
dll3.reverse();
console.log("Reversed:", dll3);
console.log("-------- Remove Value -------");
