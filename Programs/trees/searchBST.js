//Using recursion
//O(H) and spacing O(H)
function searchBST(root, k){
    if(root === null){
        return 0;
    }
    if(root.data === k){
        return 1;
    }
    let left = searchBST(root.left, k);
    let right = searchBST(root.right, k);
    return left || right;
}

//Using recursion but more optimised
//O(H) and spacing O(H)
function searchBST(root, k){
    if(root === null){
        return 0;
    }
    if(root.data === k){
        return 1;
    } else if(root.data < k){
       return searchBST(root.right, k);
    } else {
        return searchBST(root.left, k);
    }
}

//Using regular while loop
//O(H) and spacing - O(1)
function searchBST(root, k){
    let temp = root;
    while(temp !== null){
        if(temp.data < k){
            temp = temp.right;
        } else if(temp.data > k){
            temp = temp.left;
        } else {
            return 1;
        }
    }
    return 0;
} 