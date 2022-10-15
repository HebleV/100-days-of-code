//This is inplace swap which is possible only for a square matrix
//O(N^2) & SC - O(1)
// function transposeSquareMatrix(arr) {
//     let temp;
//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j<i; j++){
//             temp = arr[i][j];
//             arr[i][j] = arr[j][i];
//             arr[j][i] = temp;
//         }
//     }
//     return arr
// }

function transposeSquareMatrix(arr) {
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<i; j++){
            [arr[i][j], arr[j][i]] =  [arr[j][i],arr[i][j]];
            console.log(i,j);
        }
    }
    return arr
}

const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transposeSquareMatrix(arr1));
