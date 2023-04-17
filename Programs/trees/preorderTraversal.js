function preorderTraversal(A){
    const stack = [];
    const result = [];
    let current = A;
    while(current !== null || stack.length > 0){
        while(current !== null){
            result.push(current.data);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        current = current.right;
    }
    return result;
}