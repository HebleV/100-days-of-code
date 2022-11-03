function equilibriumIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  const prefixSum = [];
  prefixSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }
  for(let j = 0; j < arr.length; j++){
    leftSum = j == 0 ? 0 : prefixSum[j-1];
    rightSum = prefixSum[arr.length - 1] - prefixSum[j];
    console.log("leftSum,rightSum", leftSum, rightSum)
    if(leftSum === rightSum){
        return j;
    }
  }
  return -1;
}

console.log(equilibriumIndex([-3,2,4,-1]));
