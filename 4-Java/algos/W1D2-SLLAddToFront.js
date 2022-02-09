class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        // if (this.head) {
        //     return false;
        // } else {
        //     return true;
        // }
        return this.head == null;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // add given node to the head, if it exists.
    // list is empty?
    // list already has nodes?
    addToFront(node) {
        // var newNode = new Node(value);
        // if (this.isEmpty()) {
        //     this.head = newNode;
        // } else {
        //     newNode.next = node;
        // }
        node.next = this.head;
        this.head = node;
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        const frontNode = new Node(data);
        frontNode.next = this.head;
        this.head = frontNode;
    }
}

// instantiate the SLL
var myList = new SLL();

// creating nodes
var myNode = new Node(55);

// executing methods:
myList.addToFront(new Node(55));
myList.addToFront(new Node(44));
myList.addToFront(new Node(33));
myList.addToFront(new Node(22));
console.log(myList);