function subtractMatrices(arr1, arr2) {
  const finalArr = [];
  let subArrSum;
  for (let i = 0; i < arr1.length; i++) {
    subArrSum = [];
    for (let j = 0; j < arr1[0].length; j++) {
      subArrSum.push(arr1[i][j] - arr2[i][j]);
    }
    finalArr.push(subArrSum);
  }
  return finalArr;
}

A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ];

console.log(subtractMatrices(A, B));
