// === CLASSES ===

// Stack
// LAST IN, FIRST OUT
class slStack {
  constructor() {
    this.top = null; // this.head, this.end
    this.length = 0;
  }

  // return a copy of the current stack, in the same order
  // you may not linearly traverse
  // you must return the current stack back to it's original order
  copy() {
    let tempStack = new slStack();
    let copyStack = new slStack();

    while (this.top) {
      let value = this.pop();
      tempStack.push(value);
    }

    while (tempStack.top) {
      let value = tempStack.pop();
      copyStack.push(value);
      this.push(value);
    }
    return (this, copyStack);
  }

  // reverse the order of the current stack
  // you may not linearly traverse
  // use only stacks and queues as additional storage
  reverse() {
    // Reverse using a queue
    // instantialize temporary queue
    let tempQueue = new Queue();
    // execute while not empty
    while (!this.isEmpty()) {
      // pop nodes from stack and enqueue into tempQueue
      let temp = this.pop();
      tempQueue.enqueue(temp);
    }
    // execute while not empty
    while (!tempQueue.isEmpty()) {
      // dequeue each node and push back into stack
      this.push(tempQueue.dequeue());
    }
    //   // Reverse iteratively by changing the next pointer of each node to the previous node
    //   // create variable for node and pointers
    //   let node = this.top,
    //     previous,
    //     temp;
    //   while (node) {
    //     // set temp to value of next node
    //     temp = node.next;
    //     // reverse the pointer
    //     node.next = previous;
    //     // step forward to the next position
    //     previous = node;
    //     node = temp;
    //   }
    //   // temp becomes null and the last node at previous becomes the top of new stack
    //   return previous;
  }

  // // when reverse reaches the end of the stack, it will grab the last node as the new top and reference each node backwards
  // recursiveReverse() {
  //   let runner = this.top.next;
  //   let temp = reverse(runner);
  //   if (!this.top || !runner)
  //     return top;
  //   runner.next = top;
  //   runner = undefined;
  //   return temp;
  // }

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
function isStackSorted(stack) {
  var tempStack = new slStack();
  var sorted = true;

  while (!stack.isEmpty()) {
    var tempNode = stack.pop();
    if (tempStack.isEmpty() || tempStack.peek().data <= tempNode.data) {
      tempStack.push(tempNode);
    } else {
      sorted = false;
      tempStack.push(tempNode);
      break;
    }
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return sorted;
}

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

// 1. instantiate a stack
// 2. add a few nodes to the stack
// call myStack.copy()
// call myStack.reverse()

var myStack = new slStack();
myStack.push(new Node(220));
myStack.push(new Node(133));
myStack.push(new Node(44));
myStack.push(new Node(15));

let reverse = myStack.reverse();
let copy = myStack.copy();
console.log("copy", copy);

myStack.reverse();
console.log("reverse", myStack);

console.log(isStackSorted(myStack));