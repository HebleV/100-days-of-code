// function matrixMultiplication(arr, num) {
//   const pdtArr = [];
//   let subArr;
//   for (let i = 0; i < arr.length; i++) {
//     subArr = [];
//     for (let j = 0; j < arr[i].length; j++) {
//       subArr.push(arr[i][j] * num);
//     }
//     pdtArr.push(subArr);
//   }
//   return pdtArr;
// }

function matrixMultiplication(arr, num) {
  let n = arr.length;
  let m = arr[0].length;

  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++) {
        arr[i][j] *= num;
    }
  }  
  return arr;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrixMultiplication(arr, 2));
