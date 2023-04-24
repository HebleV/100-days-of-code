function isValidBST(root){
    function helper(root, min, max){
        if(root === null){
            return 1;
        }
        if(root.data < min || root.data >= max)return 0;
        let left = helper(root.left, min, root.data);
        let right = helpder(root.right, root.data, max);
        return left && right;
    }
    return helper(root, null, null);
}
