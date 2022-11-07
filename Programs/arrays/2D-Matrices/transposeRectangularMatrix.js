function transposeSquareMatrix(arr) {
    let row = new Array(arr.length);
    for(let i = 0; i<arr[0].length; i++){
        row[i] = [];
    }
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            row[j][i] = arr[i][j]
        }
    }
    return row
}

const arr1 = [
  [1, 2, 3, 9],
  [4, 5, 6, 8],
  [7, 8, 9, 7],
];
console.log(transposeSquareMatrix(arr1));