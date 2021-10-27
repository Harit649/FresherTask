/* Binary Search Tree */

class Node 
{
    constructor(data, left = null, right = null) 
    {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
    add(data) 
    {
      const node = this.root;
      if (node === null) 
      {
        this.root = new Node(data);
        return;
      } 
      else 
      {
        const searchTree = function(node) 
        {
          if (data < node.data)
          {
            if (node.left === null) 
            {
              node.left = new Node(data);
              return;
            } 
            else if (node.left !== null) 
            {
              return searchTree(node.left);
            }
          } 
          else if (data > node.data) 
          {
            if (node.right === null) 
            {
              node.right = new Node(data);
              return;
            }
            else if (node.right !== null)
            {
              return searchTree(node.right);
            }
          } 
          else 
          {
            return null;
          }
        };
        return searchTree(node);
      }
    }
  }
  
  
  
  const bst = new BST();
  
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);
  
  console.log(bst);
//   console.log(bst.findMinHeight());
//   console.log(bst.findMaxHeight());
//   console.log(bst.isBalanced());
//   bst.add(10);
//   console.log(bst.findMinHeight());
//   console.log(bst.findMaxHeight());
//   console.log(bst.isBalanced());
//   console.log('inOrder: ' + bst.inOrder());
//   console.log('preOrder: ' + bst.preOrder());
//   console.log('postOrder: ' + bst.postOrder());
  
//   console.log('levelOrder: ' + bst.levelOrder());