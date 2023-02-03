// Find the contiguous non-empty subarray within an array, A of length N, 
// with the largest sum.
//Using Kadane's algo
function maxSumSubArr(A) {
  // let max = Number.MIN_VALUE;
  // let sum = 0;
  // for(let i = 0; i<arr.length; i++){
  //     sum = sum + arr[i];
  //     max = Math.max(max,sum);
  //     if(sum<0) sum = 0;
  // }
  // return max;

  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (const num of A) {
    sum += num;
    max = Math.max(max,sum);
    if(sum<0) sum = 0;
  }
  return max;
}

const A1 = [1, 2, 3, 4, -10];
console.log(maxSumSubArr(A1));
