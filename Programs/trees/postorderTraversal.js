function postorderTraversal(root) {
  if (!root) return [];
  let stack = [root];
  let result = [];
  while (stack.length) {
    let node = stack.pop();
    result.unshift(node.data);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return result;
}