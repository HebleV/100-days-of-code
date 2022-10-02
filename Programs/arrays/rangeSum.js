function rangeSum(arr, range) {
  const sumArr = [];
  for (let i = 0; i < range.length; i++) {
    let sum = 0;
    for (let j = range[i][0] - 1; j < range[i][1]; j++) {
      sum = sum + arr[j];
    }
    sumArr.push(sum);
  }
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
