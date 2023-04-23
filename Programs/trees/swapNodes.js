
function swapNodes(A) {
    let first = null;
    let second = null;
    let prev = null;
  
    function inorderTraversal(root) {
      if (root === null) {
        return;
      }
  
      inorderTraversal(root.left);
  
      if (prev !== null && prev.val > root.val) {
        if (first === null) {
          first = prev;
        }
        second = root;
      }
      prev = root;
  
      inorderTraversal(root.right);
    }
  
    inorderTraversal(A);
  
    if (first && second) {
      const temp = first.val;
      first.val = second.val;
      second.val = temp;
    }
  }
  