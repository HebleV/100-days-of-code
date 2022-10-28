//O(N^2)
//Print only the elements in spiral order
function spiralMatrix(arr){
    let row = 0;
    let col = 0;
    const newArr = [];
    let n = arr.length;
    while(n > 1){
        for(let i = 0; i<n-1; i++){
            newArr.push(arr[row][col]);
            col++;
        }
        for(let i = 0; i<n-1; i++){
            newArr.push(arr[row][col]);
            row++;
        }
        for(let i = 0; i<n-1; i++){
            newArr.push(arr[row][col]);
            col--;
        }
        for(let i = 0; i<n-1; i++){
            newArr.push(arr[row][col]);
            row--;
        }
        n = n - 2;
        row++;
        col++;
    }
    if(n == 1){
        newArr.push(arr[row][col])
    }
    return newArr;
}

// function spiralMatrix(array){
//     let startCol = 0;
//     let startRow = 0;
//     let endRow = array.length-1;
//     let endCol = array[0].length-1;
//     const spiralArray = [];
//     while(startRow <= endRow && startCol <= endCol) {
//         for(let col = startCol; col <= endCol; col++) {
//             console.log("1st",array[startRow][col])
//             spiralArray.push(array[startRow][col])
//         }
//         for(let row = startRow + 1; row <= endRow; row++) {
//             console.log("2nd",array[row][endCol])
//             spiralArray.push(array[row][endCol])
//         }
//         for(let col = endCol - 1; col >= startCol; col--){
//             if(startRow === endRow)break;
//             spiralArray.push(array[endRow][col]);
//         }
//         for(let row = endRow - 1; row > startRow; row--){
//             if(startCol === endCol)break;
//             spiralArray.push(array[row][startCol]);
//         }
//         startRow++;
//         endRow--;
//         startCol++;
//         endCol--;
//     }
//     return spiralArray;
// }


const arr1 = [
    [1, 2, 3, 4,  5,  6],
    [7, 8, 9, 10, 11,12],
    [13,14,15,16, 17,18],
    [19,20,21,22, 23,24],
    [25,26,27,28, 29,30],
    [31,32,33,34, 35,36]
];
console.log(spiralMatrix(arr1))