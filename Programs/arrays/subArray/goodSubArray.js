/* Given an array of integers A, a subarray of an array is said to be good if it fulfills any one of the criteria:
1. Length of the subarray is be even, and the sum of all the elements of the subarray must be less than B.
2. Length of the subarray is be odd, and the sum of all the elements of the subarray must be greater than B.
Your task is to find the count of good subarrays in A.*/

// Brute force => O(N^3)
// function goodSubArray(arr, val) {
//   const finalArr = [];
//   let subArrSum;
//   let evenCount = 0;
//   let oddCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       subArrSum = 0;
//       const subArr = [];
//       for (let k = i; k <= j; k++) {
//         subArrSum = subArrSum + arr[k];
//         subArr.push(arr[k]);
//         console.log("subArrSum", i, j, k);
//       }
//       if (subArr.length % 2 == 0 && subArrSum < val) {
//         evenCount++;
//       } else if (subArr.length % 2 != 0 && subArrSum > val) {
//         oddCount++;
//       }
//       finalArr.push(subArr);
//     }
//   }
//   return evenCount + oddCount;
// }

//O(N^2) using prefix sum method
function goodSubArray(arr, val) {
  let count = 0;
  const prefixSum = [];
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  for (let j = 0; j < arr.length; j++) {
    let sum = 0;
    for (let k = j; k < arr.length; k++) {
      if (j != 0) {
        sum = prefixSum[k] - prefixSum[j - 1];
      } else {
        sum = prefixSum[k];
      }
      let subArrLen = k - j + 1;
      if (subArrLen % 2 == 0 && sum < val) {
        count++;
      } else if (subArrLen % 2 != 0 && sum > val) {
        count++;
      }
    }
  }
  return count;
}

console.log(goodSubArray([1, 2, 3, 4, 5], 4));
