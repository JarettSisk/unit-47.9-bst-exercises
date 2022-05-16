class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(!this.root) {
      this.root = new Node(val);
      return this;
    }

    let node = this.root;
    while(node) {
      if(node.val > val) {
        // if left node exists move left
        if(node.left) {
          node = node.left;
        }
        // else insert to left
        else {
          node.left = new Node(val);
          return this;
        }
      } 
      else if(node.val < val) {
        // if right node exists
        if(node.right) {
          node = node.right;
        }
        // else insert to right
        else {
          node.right = new Node(val);
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(!this.root) {
      this.root = new Node(val);
      return this;
    }
    const helper = function(node) {
      if (node.val > val) {
        if(node.left) {
          helper(node.left);
        }
        else {
          node.left = new Node(val);
        }
      }
      else if (node.val < val) {
        if(node.right) {
          helper(node.right);
        }
        else {
          node.right = new Node(val);
        }
      }
    }

    helper(this.root);
    return this;
    
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return null;
    let currentNode = this.root;
    while(currentNode) {
      if(currentNode.val === val) {
        return currentNode;
      }
      if(currentNode.val > val) {
        // move left
        if(currentNode.left) {
          currentNode = currentNode.left;
        }
        else {
          return;
        }
      }
      if(currentNode.val < val) {
        // move right
        if(currentNode.right) {
          currentNode = currentNode.right;
        }
        else {
          return;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(!this.root) return;
    const findRecursivlyHelper = (node) => {
      if(node.val === val) {
        return node;
      }
      if(node.val > val) {
        if(node.left) return findRecursivlyHelper(node.left);
      }
      else {
        if(node.right) return findRecursivlyHelper(node.right);
      }

    }
    return findRecursivlyHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if(!this.root) return;
    const dfsPreOrderHelper = (node, arr = []) => {
      if(node) {
          arr.push(node.val);
          if(node.left) dfsPreOrderHelper(node.left, arr);
          if(node.right) dfsPreOrderHelper(node.right, arr);
      }
      return arr;
    }

    return dfsPreOrderHelper(this.root);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if(!this.root) return;
    const dfsInOrderHelper = (node, arr = []) => {
      if(node) {
          if(node.left) dfsInOrderHelper(node.left, arr);
          arr.push(node.val);
          if(node.right) dfsInOrderHelper(node.right, arr);
      }
      return arr;
    }

    return dfsInOrderHelper(this.root);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if(!this.root) return;
    const dfsPostOrderHelper = (node, arr = []) => {
      if(node) {
          if(node.left) dfsPostOrderHelper(node.left, arr);
          if(node.right) dfsPostOrderHelper(node.right, arr);
          arr.push(node.val);
      }
      return arr;
    }

    return dfsPostOrderHelper(this.root);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(!this.root) return;
    let visitedNodes = [];
    let nodeQueue = [this.root];

    while(nodeQueue.length) {
      console.log("running")
      let current = nodeQueue.shift();
      visitedNodes.push(current.val);
      if(current.left) {
        nodeQueue.push(current.left);
      }
      if(current.right) {
        nodeQueue.push(current.right);
      }
    }
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
