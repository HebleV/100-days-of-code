//Square matrix only (NxN)
// O(N^2)
// function diagonalSum(arr) {
//     let sum = 0;
//     for(let i = 0; i<arr.length;i++){
//         for(let j = 0; j<arr[i].length;j++){
//             if(i == j){
//                 sum = sum + arr[i][j];
//             } 
//         }
//     }
//     return sum;
// }

// O(N) solution
// Since its a square matrix, so it will be a single loop only as i and j will be same 
// i.e. [0,0] [1,1] [2,2]
function diagonalSum(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i][i];
    }
    return sum;
}

const arr = [
  [1, -2, -3],
  [-4, 5, -6],
  [-7, -8, 9],
];
console.log(diagonalSum(arr));
