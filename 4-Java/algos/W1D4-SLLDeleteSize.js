class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    // BONUS: this.length = 0;
  }

  // console log (print) the data of every node in the current list
  read() {
    let current = this.head; // set current as the head, if it exists or not
    while (current) { // if current, log and move to current.next
      console.log(current.data);
      current = current.next;
    }
  }

  // find: return true / false if current list contains a data equal to value
  contains(value) {
    // start at the head
    let runner = this.head;
    // while we have a runner
    while (runner) {
      // return true if data === value
      if (runner.data === value) {
        return true;
      }
      // otherwise advance the runner
      runner = runner.next;
    }
    // if the while loop completes, return false
    return false;
  }

  // Remove from front: remove and return the first node in the SLL
  removeFromFront() {
    if (this.isEmpty()) return null; // nothing to remove

    let removed = this.head; // save the head in a temp variable
    this.head = this.head.next; // move the head
    removed.next = null; // make removed no longer reference the list
    return removed;
  }

  // return true or false if this.head is null
  isEmpty() {
    return this.head == null;
  }

  // add given node to the head, if it exists. return void
  addToFront(node) {
    node.next = this.head; // set the new node's next to the head
    this.head = node; // move the head to the new node
    this.length++;
  }

  // myList.addToFront(new Node(22));

  // when a pointer is to the LEFT of an equal sign, we are CHANGING it
  // when a pointer is to the RIGHT of an equal sign, we are READING it

  // create a new node with given data, add it to the head. return void
  addDataToFront(data) { // 10
    let newNode = new Node(data); // create a new node with the data
    newNode.next = this.head; // set the new node's next to the head
    this.head = newNode; // move the head to the new node
    this.length++;
  }

  // if data is contained within the current list, delete it.
  // return void
  // assume there are no duplicates
  // consider the edge case if you have to delete the head node
  // consider the edge case your list is empty
  // consider the edge case that your list does not contain the data
  delete(value) {
    let runner = this.head;
    runner.data == value && (this.head = runner.next);
    while (!runner.next) {
      runner.next.data == value ?
        runner.next = runner.next.next :
        runner = runner.next;
      this.length--;
    }

    // if (runner.data == value)
    //   this.head = runner.next;
    // while (!runner.next) {
    //   if (runner.next.data == value)
    //     runner.next = runner.next.next;
    //   else runner = runner.next;
    //   this.length--;
    // }

    // if (!runner) {
    //   return "There is no list";
    // }
    // if (!this.contains(value)) {
    //   return "The list does not contain the value";
    // }
    // if (runner.data === value) {
    //   return this.removeFromFront();
    // }
    // while (runner.next.data != value) {
    //   runner = runner.next;
    //   this.length--;
    // }
    // runner.next = runner.next.next;
  }

  // return the size of the current linked list
  // BONUS: how might you do this without linearly traversing the list? O(1)
  // you may have to change other methods within this class... 
  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
    // BONUS: return this.length;
  }
}

// Don't forget to instantiate the SLL!
// and add a few nodes first!

// (head) -> (33) -> (22) -> null
//            ^
//          runner

let myList = new SLL();

myList.addDataToFront(44);
myList.addDataToFront(33);
myList.addDataToFront(22);
myList.addDataToFront(11);

console.log("----- Node Size -----");
console.log(myList.size());
console.log("----- All Nodes -----");
myList.read();
console.log("----- Delete Node -----");
myList.delete(11);
console.log(myList.size());
myList.read();
