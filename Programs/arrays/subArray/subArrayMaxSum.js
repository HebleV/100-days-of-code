//Find the max sum of all sub arr of size k
//O(N-k)*k and worst case can be O(N^2)
//Brute force method
// function subArrayMaxSum(arr, k){
//     let endIndex;
//     let sum;
//     let max = Number.NEGATIVE_INFINITY;
//     //formula for calculating start index and end index in a sub arr from line 7 to 9
//     for(let startIndex = 0; startIndex<=arr.length-k; startIndex++){
//         sum = 0;
//         endIndex = startIndex + k - 1;
//         for(let i = startIndex; i<=endIndex; i++){
//             sum = sum + arr[i];
//         }
//         if(sum > max){
//             max = sum;
//         }
//     }
//     return max;
// }

// Using prefix sum
//O(N + N - k) => O(N-k) && SC => O(N)
// function subArrayMaxSum(arr, k) {
//   let endIndex;
//   let sum = 0;
//   const prefixArr = [];
//   let max = Number.NEGATIVE_INFINITY;
//   prefixArr[0] = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     prefixArr[i] = prefixArr[i - 1] + arr[i];
//   }
//   console.log(prefixArr);
//   for (let startIndex = 0; startIndex <= arr.length - k; startIndex++) {
//     endIndex = startIndex + k - 1;
//     if(startIndex != 0){
//         sum = prefixArr[endIndex] - prefixArr[startIndex - 1];
//     } else {
//         sum = prefixArr[endIndex];
//     }
//     console.log("sum", sum)
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }

//Using sliding window => Use this approach for optimising
//O(N - k + k) => O(N) & O(1)
function subArrayMaxSum(arr, k) {
  let endIndex;
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;

  //O(k)
  for (let i = 0; i <= k - 1; i++) {
    sum = sum + arr[i];
  }

  max = Math.max(sum, max);
   //O(N-k)
  for (let startIndex = 1; startIndex < arr.length - k; startIndex++) {
    endIndex = startIndex + k - 1;
    sum = sum - arr[startIndex - 1] + arr[endIndex];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

console.log(subArrayMaxSum([5, 3, -2, 1, 6, 2, -1, 4, 3], 4));
