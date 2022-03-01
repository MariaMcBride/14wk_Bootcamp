// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html
/*
          this.root
              |
              (10)
    node.left /   \ node.right
          (5)     (15)
          /  \     /   \ 
              (12)   (20)
              /  \   /  \
*/

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  };

  // recursive insert
  //    the new node we want to insert
  //      |
  //      |     pass a changed current as we call the function again
  //      |       |
  //      v       v
  insert(node, current) {
    // default current to root if no current exists
    if (current === undefined) {
      current = this.root;
    };

    // if empty tree, new node becomes root
    if (current === null) {
      this.root = node;
      return;
    };

    if (current.val > node.val) { // go left
      // check if null and insert
      if (current.left === null) { // <-- base case for inserting left
        current.left = node;
        return;
      } else {
        // otherwise recurse left
        // return xyz.join(", ");
        return this.insert(node, current.left); // <-- move current to current.left
      }
    } else if (current.val < node.val) { // go right
      // check if null and insert
      if (current.right === null) { // <-- base case for inserting right
        current.right = node;
        return;
      } else {
        // otherwise recurse right
        return this.insert(node, current.right);
      }
    }
  };

  // recursive
  getLargestFromSubtree(current) {
    // default current to root if no current exists
    if (current === undefined) {
      current = this.root;
    } // if the right side is not empty return recursive call
    if (current.right !== null) {
      return this.getLargestFromSubtree(current.right);
    } else {
      return current;
    }
  }

  // iterative
  getSmallestFromSubtree() {
    // set current variable to this.root
    let current = this.root;
    // while loop that runs while left side is not empty
    while (current.left !== null) {
      current = current.left; // left value becomes the new current
    }
    return current;
  }

  // return true or false is val exists within the current tree
  // if current is undefined, current = this.root
  find(val, current) {
    // default current to root if no current exists
    if (current === undefined) {
      current = this.root;
    } // base case if empty
    if (current === null) {
      return false;
    }; // if not empty
    if (current.val === val) {
      return true;
    } // recursive call to check left and right
    else if (val > current.val) {
      return this.find(val, current.right);
    } else {
      return this.find(val, current.left);
    }
  }

}

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(15));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
myBST.insert(new BSTNode(12));
console.log(myBST);
console.log("---------- Get Max (Recursive) ---------");
console.log(myBST.getLargestFromSubtree());
console.log("---------- Get Min (Iterative) ---------");
console.log(myBST.getSmallestFromSubtree());
console.log("----------- Find (Recursive) -----------");
console.log("Is 10 in the tree?", myBST.find(10));
console.log("Is 25 in the tree?", myBST.find(25));
// call other methods here and test!