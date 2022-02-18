// === CLASSES ===

// Stack
// LAST IN, FIRST OUT
class slStack {
  constructor() {
    this.top = null; // this.head, this.end
    this.length = 0;
  }

  // add to top
  push(newNode) {
    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  // remove from top
  pop() {
    if (this.top === null) return null;

    const removed = this.top; // store previous top
    this.top = this.top.next; // move top pointer
    removed.next = null; // remove pointer from stored node
    this.length--; // decrement length

    return removed; // return the node
  }

  // aka check top
  peek() {
    return this.top;
  }

  // check if empty
  isEmpty() {
    return this.top === null;
  }    // length getter
  getLength() {
    return this.length;
  }
}

// Queue
// FIRST IN, FIRST OUT
class Queue {
  constructor() {
    this.front = null; // sometimes called head "front of the line"
    this.back = null; // sometimes called rear or tail "back of the line"
    this.length = 0;
  }

  enqueue(node) {
    if (this.back === null) { // if back is null, list is empty
      this.back = node;
      this.front = node;
    } else { // otherwise add to back
      this.back.next = node;
      this.back = node;
    }
    this.length++;
  }

  // remove from the front
  dequeue() {
    if (this.front === null) {
      return null; // if empty return nothing
    };
    if (this.front === this.back) {
      this.back = null;
    };
    let node = this.front;
    this.front = node.next;
    node.next = null;
    this.length--;
    return node;
  }

  // check the front of the queue
  peek() {
    // return this.front ? this.front.data : this.front;
    return this.front;
  }

  // return if empty
  isEmpty() {
    return this.front === null;
  }

  // return length
  count() {
    return this.length;
  }
}

// Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// === HELPER FUNCTIONS ===
function isPalindrome(queue) {
  let temp = new Queue();
  let reverseString = ""; // d -> "abc"
  let normalString = ""; // "abc" <- d

  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    reverseString = node.data + reverseString;
    normalString += node.data;
    temp.enqueue(node);
  }

  while (!temp.isEmpty()) {
    queue.enqueue(temp.dequeue());
  }

  console.log(normalString);
  console.log(reverseString);

  return reverseString === normalString;
}

function readQueue(queue) {
  var tempQueue = new Queue();

  while (!queue.isEmpty()) {
    var tempNode = queue.dequeue();
    console.log(tempNode.data);
    tempQueue.enqueue(tempNode);
  }

  while (!tempQueue.isEmpty()) {
    queue.enqueue(tempQueue.dequeue());
  }

  return queue;
}

function readQueue2(queue) {
  var length = queue.count();

  while (length) {
    var node = queue.dequeue();
    console.log(node.data);
    queue.enqueue(node);
    length--;
  }
}

function countStack(stack) {
  let newStack = new slStack();

  let count = 0;

  while (!stack.isEmpty()) {
    let node = stack.pop();
    newStack.push(node);
    count++;
  }

  while (!newStack.isEmpty()) {
    stack.push(newStack.pop());
  }

  return count;
};

// STACK - IS SORTED
// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
  // check if stack is not empty
  // pop all elements from the stack and store popped elements in variable temp
  let tempStack = new slStack();
  let isSorted = true;
  while (!stack.isEmpty()) {
    let temp = stack.pop();
    let tempNode = tempStack.peek()
    if (tempStack.isEmpty() || tempNode.data <= temp.data)
      tempStack.push(temp);
    else {
      isSorted = false;
      tempStack.push(temp);
      break;
    }
  }
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return isSorted;

  // if (stack.isEmpty()) return null;
  // let tempStack = new slStack();
  // let tempNode;
  // let temp = null;

  // console.log(stack);
  // while (stack.top) {
  //   tempNode = stack.pop()
  //   if (temp == null) {
  //     temp = tempNode.data;
  //     tempStack.push(tempNode)
  //   }
  //   else if (tempNode.data >= temp) {
  //     while (tempStack.top) {
  //       stack.push(tempStack.pop());
  //     }
  //     console.log(stack);
  //     return false
  //   } else {
  //     temp = tempNode.data;
  //     tempStack.push(tempNode);
  //   }
  // }
  // //return stack to OG state
  // while (tempStack.top) {
  //   stack.push(tempStack.pop());
  // }
  // console.log(stack);
  // return true
}

// 1. instantiate a stack
// 2. add a few nodes to the stack
// 3. call isStackSorted(yourStack)

var pringlesCan = new slStack();
pringlesCan.push(new Node(220));
pringlesCan.push(new Node(133));
pringlesCan.push(new Node(44));
pringlesCan.push(new Node(15));
console.log(pringlesCan);
console.log(isStackSorted(pringlesCan));