//Print only the boundary elements
function boundaryElementsNxM(arr){
    let row = 0;
    let col = 0;
    const newArr = [];
    for(let i = 0; i<arr[0].length-1; i++){
        newArr.push(arr[row][col]);
        col++;
    }
    for(let i = 0; i<arr.length-1; i++){
        newArr.push(arr[row][col]);
        row++;
    }
    for(let i = 0; i<arr[0].length-1; i++){
        newArr.push(arr[row][col]);
        col--;
    }
    for(let i = 0; i<arr.length-1; i++){
        newArr.push(arr[row][col]);
        row--;
    }
    return newArr;
}

const arr1 = [
    [1,2,3,4,5,6],
    [7,8,9,10,11,12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30]
];

console.log(boundaryElementsNxM(arr1))