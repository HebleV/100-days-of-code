function findHeight(root){
    if(root === null){
        return 0;
    }
    let leftHeight = findHeight(root.left);
    let rightHeight = findHeight(root.right);
    if(leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1){
        return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(A){
    if(findHeight(A) === -1){
        return 0;
    }
    return 1;
}