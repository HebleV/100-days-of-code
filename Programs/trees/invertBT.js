// O(N) && O(H)
function invertBT(root){
    if(root === null) return null;
    let temp = invertBT(root.right);
    root.right = invertBT(root.left);
    root.left = temp;
    return root;
}