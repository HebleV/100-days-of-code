function inorderTraversal(A){
    if (!A) return null;
    const stack = [];
    const result = [];
    let current = A;
    while(current != null || stack.length > 0){
        while(current != null){
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.data);
        current = current.right;
    }
    return result;
}