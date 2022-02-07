const findKthLargestElement = (arr, k) => {
    arr.sort((a,b) => a - b);
    return arr[arr.length - k];
}

console.log(findKthLargestElement([3,2,1,5,6,4], 2))


//Alternate soln
// const findKthLargestElement = (arr, k) => {
//     arr.sort((a,b) => b - a);
//     return arr[k-1];
// } 