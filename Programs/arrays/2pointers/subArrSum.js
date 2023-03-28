//Find Subarray with given sum
//Given an unsorted array A of size N of non-negative integers, find a continuous sub-array which adds to a given number S.
//Example
// A = [1, 2, 3, 4, 5]
// B = 5
// Output 1:

//  [2, 3]

function subArrSum(arr, val) {
    let i = 0;
    let j = 0;
    let totalSum = 0;
    while (j < arr.length) {
        totalSum += arr[j];
        
        while (totalSum > val) {
            totalSum -= arr[i];
            i++;
        }
        
        if (totalSum === val) {
            return arr.slice(i, j + 1);
        }
        j++;
    }
    return -1;
}


A = [1, 2, 3, 4, 5]
B = 5

const arr1 = [ 5, 10, 20, 100, 105 ]
console.log(subArrSum(arr1, 110))
