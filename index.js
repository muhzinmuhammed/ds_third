class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
    
  }
  isEmpty() {
    return this.root == null;
  }

  insertBinary(value) {
    let current = this.root;
    const newNode = new Node(value);
    if (current == null) {
      this.root = newNode;
      return;
    }

    while (true) {
      if (value < current.value) {
        if (current.left == null) {
          current.left = new Node(value);
          break;
        } else {
          current = current.left;
        }
      } else {
        if (current.right == null) {
          current.right = new Node(value);
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  searchTree(value) {
    let current = this.root;
    while (current != null) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  preOrder(root) {
    
    if (root) {

      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root == null) {
      return root;
    }
    if (value < root.value) {
      root.left =  this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left&&!root.right) {
        return null
        
      }
      if (!root.left) {
      return root.right
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }


  findClosest(target) {
    let current = this.root;
    let closest = current.value;
    while (current) {
      if (Math.abs(target - closest) > Math.abs(target - current.value)) {
        closest = current.value;
      }
      if (target < current.value) {
        current = current.left;
      } else if (target > current.value) { 
        current = current.right;
      } else {
        break;
      }
    }
    return closest;
  }
  validate() {
    return this.check(this.root, -Infinity, Infinity);
  }
  check(root, minVal, maxVal) {
    if (root == null) {
      return true;
    }
    if (root.value > maxVal || root.value < minVal) return false;

    return  this.check(root.left, minVal, root.value) && this.check(root.right,  root.value,maxVal)
     
      
    
  }

 
}

const ss = new binarySearchTree();
ss.insertBinary(50);
ss.insertBinary(60);
ss.insertBinary(55);
ss.insertBinary(70);
ss.insertBinary(80);

ss.inOrder(ss.root)
console.log("\n");
const bb=new binarySearchTree()
bb.insertBinary(50);
bb.insertBinary(60);
bb.insertBinary(55);
bb.insertBinary(70);
bb.insertBinary(10);
bb.inOrder(bb.root)

if (ss.inOrder==bb.inOrder) {
  console.log("true");
  
}
else{
  console.log("false");

}