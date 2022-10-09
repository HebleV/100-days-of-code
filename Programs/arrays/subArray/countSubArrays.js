function countSubArrays(arr, val) {
  let subArrCount = 0;
  let totalSum;
  for (let i = 0; i < arr.length; i++) {
    totalSum = 0;
    for (let j = i; j < arr.length; j++) {
      totalSum = totalSum + arr[j];
      if(totalSum > val) {
          break;
      } else if (totalSum < val) {
          subArrCount++;
      }
      console.log("totalSum", totalSum)
    }
  }

  return subArrCount;
}

console.log(countSubArrays([2,5,6], 10));
