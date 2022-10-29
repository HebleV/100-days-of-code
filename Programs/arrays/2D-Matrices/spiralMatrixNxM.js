//O(N^2)
//Print only the elements in spiral order
function spiralMatrixNxM(arr){
    let row = 0;
    let col = 0;
    const newArr = [];
    let n = arr.length;
    let m = arr[0].length;
    //For NxM, while condition will be n>=1
    while(n >= 1 ){
        for(let i = 0; i<m-1; i++){
            newArr.push(arr[row][col]);
            col++;
        }
        for(let i = 0; i<n-1; i++){
            newArr.push(arr[row][col]);
            row++;
        }
        for(let i = 0; i<m-1; i++){
            newArr.push(arr[row][col]);
            col--;
        }
        for(let i = 0; i<n-1; i++){
            newArr.push(arr[row][col]);
            row--;
        }
        n = n - 2;
        m = m - 2;
        row++;
        col++;
    }
    if(n == 1){
        newArr.push(arr[row][col])
    } 
    return newArr;
}

const arr1 = [
    [1, 2, 3, 4,  5,  6],
    [7, 8, 9, 10, 11,12],
    [13,14,15,16, 17,18],
    [19,20,21,22, 23,24],
    [25,26,27,28, 29,30],
];
console.log(spiralMatrixNxM(arr1))