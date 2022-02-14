/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        // this.length = 0; // add this for length getter method below
    }

    // add to top
    push(newNode) {
        // if (this.top) {
        newNode.next = this.top;
        this.top = newNode;
        // } else {
        //     this.top = newNode;
        // }

        // this.length++;
    }

    // remove from top
    pop() {
        if (this.top == null)
            return null;
        // this is an else LOL 
        var temp = this.top; // store the previous top
        this.top = this.top.next; // move top pointer to the next node
        return temp;
    }

    // aka check top
    peek() {
        if (this.top.length === 0)
            console.log("Out of bounds");
        else
            return this.top[this.top.length - 1];
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        var counter = 0;
        while (this.top) {
            counter++;
            this.top = this.top.next
        }
        return counter;
        // return this.length;
    }
}

// don't forget to instantiate the slStack!
var stack1 = new slStack();
var stack2 = new slStack();

// add a few nodes first
console.log("----- Whole Stack -----");
stack1.push(new Node(10));
stack1.push(new Node(20));
stack1.push(new Node(30));
stack1.push(new Node(40));
stack1.push(new Node(50));
console.log("Stack 1:", stack1);

// remove a stack
console.log("----- Stack after Removing One -----");
stack1.pop();
console.log("Stack 1:", stack1);

// peek at top
console.log("----- Read Top of Stack -----");
console.log("Stack 1 Top:", stack1.peek());
console.log("----- Check if Stacks are Empty -----");
console.log("Is stack 1 empty?", stack1.isEmpty());
console.log("Is stack 2 empty?", stack2.isEmpty());
console.log("----- Stack Length -----");
console.log(stack1.getLength());
console.log(stack2.getLength());
