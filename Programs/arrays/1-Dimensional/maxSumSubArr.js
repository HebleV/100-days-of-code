// Find the contiguous non-empty subarray within an array, A of length N, 
// with the largest sum.
//Using Kadane's algo - O(n)
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

// Using bruteforce - O(n3)
function maxSumSubArr1(arr){
  // let max_sum = Number.NEGATIVE_INFINITY;
  // let sum;
  // for(let s = 0; s<arr.length; s++){
  //   for(let e = s; e<arr.length; e++){
  //     sum = 0;
  //     for(let i = s; i<=e; i++){
  //       sum = sum + arr[i];
  //     }
  //     max_sum = Math.max(max_sum, sum);
  //   }
  // }
  // return max_sum;

  let max_sum = Number.NEGATIVE_INFINITY;
  let sum;
  for(let i = 0; i<arr.length; i++){
    for(let j = i; j<arr.length; j++){
      sum = 0;
      for(let k = i; k<=j; k++){

      sum = sum + arr[k];
      console.log("sum", sum)
      max_sum = Math.max(max_sum,sum);
      console.log("max_sum", max_sum)
    }
    }
  }
  return max_sum;
}
const A1 = [1, 2, 3, 4, -10];
const A2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubArr1(A2));
