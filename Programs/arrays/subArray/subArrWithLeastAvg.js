//Given an array of size N, find the subarray of size K with the least average.
//Return the index of the first element of the subarray of size k that has least average.
// No need to find the avg as the lowest sum will obviously have the least avg. 
// Hence return the starting index i.e. leastIndex for the lowest sum
//O(N)
function subArrWithLeastAvg(arr, k){
    let endIndex;
    let sum = 0;
    let leastSum = Number.POSITIVE_INFINITY;
    let leastIndex=0;
    for(let i = 0; i<k; i++){
        sum = sum + arr[i];
    }
    leastSum = Math.min(sum, leastSum);
    console.log("leastSum",leastSum)
    for(let startIndex = 1; startIndex<=arr.length-k;startIndex++){
        endIndex = startIndex + k - 1;
        sum = sum + arr[endIndex] - arr[startIndex-1];
        console.log("sum", sum)
        if (sum < leastSum) {
            leastSum = sum;
            leastIndex = startIndex;
          }
    }
    console.log("l",leastSum)
    return leastIndex;
}
// console.log(subArrWithLeastAvg([3, 7, 90, 20, 10, 50, 40],3))

//Note in the below example, it will return 0 coz the very first element is the lowest num with length 1.
console.log(subArrWithLeastAvg([ 3, 16, 11, 13, 19, 17, 11, 4, 9, 9, 6, 7, 3, 6, 12, 3, 4, 15, 5, 19 ],1))