// function rangeSum(arr, range) {
//   const sumArr = [];
//   for (let i = 0; i < range.length; i++) {
//     let sum = 0;
//     for (let j = range[i][0]-1; j < range[i][1]; j++) {
//       sum = sum + arr[j];
//     }
//     sumArr.push(sum);
//   }
//   return sumArr;
// }

function rangeSum(arr, range) {
  const sumArr = [];  
  const prefixSum = [];
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  for(let j = 0; j<range.length;j++){
    let l = range[j][0]-1;
    let r = range[j][1]-1;
    if(l != 0 ){
        sumArr[j] = prefixSum[r] - prefixSum[l-1];
    } else {
        sumArr[j] = prefixSum[r];
    }
  }
  console.log("pre", prefixSum)
  return sumArr;
}

console.log(
  rangeSum(
    [6, 3, 3, 6],
    [
      [1, 4],
      [1, 3],
    ]
  )
);
