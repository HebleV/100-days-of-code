// Given a binary search tree of integers. You are given a range B and C.

// Return the count of the number of nodes that lie in the given range.

function helper(root,start, end){
    if(root === null) return;

    let count = 0;
    if(root.data >= start && root.data <= end){
        count++;
    }
    count = count + helper(root.left, start, end);
    count = count + helper(root.right, start, end);
    return count;
}
function BSTnodesRange(root,B,C){
    return helper(root, B, C);
}