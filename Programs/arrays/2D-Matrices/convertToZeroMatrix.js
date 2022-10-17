function convertToZeroMatrix(arr) {
  let row = new Array(arr[0].length);
  let col = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        row[i] = 0;
        col[j] = 0;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (row[i] == 0 || col[j] == 0) {
            arr[i][j] = 0;
      } 
    }
  }
  return arr;
}

const arr1 = [
  [1, 2, 0, 4],
  [5, 6, 7, 8],
  [9, 2, 9, 4],
];

const arr2 = [
  [97, 18, 55, 1, 50, 17, 16, 0, 22, 14],
  [58, 14, 75, 54, 11, 23, 54, 95, 33, 23],
  [73, 11, 2, 80, 6, 43, 67, 82, 73, 4],
  [61, 22, 23, 68, 23, 73, 85, 91, 25, 7],
  [6, 83, 22, 81, 89, 85, 56, 43, 32, 89],
  [0, 6, 1, 69, 86, 7, 64, 5, 90, 37],
  [10, 3, 11, 33, 71, 86, 6, 56, 78, 31],
  [16, 36, 66, 90, 17, 55, 27, 26, 99, 59],
  [67, 18, 65, 68, 87, 3, 28, 52, 9, 70],
  [41, 19, 73, 5, 52, 96, 91, 10, 52, 21],
]

console.log(convertToZeroMatrix(arr1));
