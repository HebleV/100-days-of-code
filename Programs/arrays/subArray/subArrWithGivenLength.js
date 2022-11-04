//Given an array A of length N. Also given are integers B and C.
// Return 1 if there exists a subarray with length B having sum C and 0 otherwise
//Sliding window => O(N) && SC(1)
// In sliding window, follow below steps
// 1. Find first sub arr sum to be used in next set of sub arr sums (as on line10)
// 2. Find startindex and endindex and the corresponding sums (as on line 16)
function subArrayMaxSum(arr, len, val){
    let sum = 0;
    let endIndex;
    for(let i = 0; i<len; i++){
        sum = sum + arr[i];
    }
    if(sum == val){
        return 1
    }
    for (let startIndex = 1; startIndex <= arr.length - len; startIndex++) {
        endIndex = startIndex + len - 1;
        sum = sum - arr[startIndex-1] + arr[endIndex];
        if(sum == val){
            return 1
        }
    }
    return 0
}

// console.log(subArrayMaxSum([ 43, 38, 72, 11, 43, 47 ], 4, 43))
console.log(subArrayMaxSum([ 4,3,2,6], 2, 5))