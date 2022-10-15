// function minorDiagonalSum(arr) {
//   let i = 0;
//   let j = arr[i].length-1;
//   let sum = 0;
//   while (i <= arr.length && j >= 0) {
//     console.log("i,j", i, j);
//     sum = sum + arr[i][j];
//     i++;
//     j--;
//   }
//   return sum;
// }

function minorDiagonalSum(arr) {
  let sum = 0;
  for(let i = 0; i<arr.length; i++){
      sum = sum + arr[i][arr.length-1-i];
  }
  return sum;
}

const arr = [
  [1, -2, -3],
  [-4, 5, -6],
  [-7, -8, 9],
];

const arr1 = [
  [3, 2],
  [2, 3],
];

console.log(minorDiagonalSum(arr1));
