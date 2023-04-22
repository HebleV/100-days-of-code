function twoSumBST(root, k){
    const values = [];
    function createInOrder(root){
        if(root === null) return;
        createInOrder(root.left);
        values.push(root.data);
        createInOrder(root.right);
    }
    createInOrder(root);

    let i = 0;
    let j = values.length - 1;
    while(i < j){
        if(values[i] + values[j] === k){
            return 1;
        } else if(values[i] + values[j] < k){
            i++;
        } else {
            j--;
        }
    }
    return 0;
}