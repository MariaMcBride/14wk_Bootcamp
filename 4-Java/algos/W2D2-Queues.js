class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count
class Queue {
  constructor() {
    this.front = null; // sometimes called head "front of the line"
    this.back = null; // sometimes called rear or tail "back of the line"
    this.length = 0;
  }

  // add nodes to the back of the queue
  enqueue(node) {
    var node = new Node(node);
    if (this.isEmpty()) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
  }

  // remove from the front
  dequeue() {
    if (!this.front)
      return null;
    // !this.front && null;
    var dequeued = this.front;
    this.front = this.front.next;
    dequeued.next = null;
    this.length--;
    return dequeued;
  }

  // check the front of the queue
  peek() {
    return this.front ? this.front.data : this.front;

    if (this.front) {
      return this.front.data
    } else {
      return this.front
    }
  }

  // return true / false if queue is empty
  isEmpty() {
    return this.front === null
  }

  // return length
  count() {
    return this.length;
  }

}

// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
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


var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log("----- Check the front of the queue -----");
console.log(queue.peek());
console.log("----- Check the whole queue -----");
console.log(queue);
console.log("----- Check front after dequeueing -----");
queue.dequeue();
console.log(queue.peek());
console.log("----- Check queue after dequeueing -----");
console.log(queue);
console.log("----- NINJA BONUS: Read all in queue -----");
console.log(readQueue(queue));
console.log("----- Final overall queue count -----");
console.log(queue.count());