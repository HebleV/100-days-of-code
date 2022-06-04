//O(n) time && O(n) space
function spiralTraverse(array) {
    let startCol = 0;
    let startRow = 0;
    let endRow = array.length-1;
    let endCol = array[0].length-1;
    const spiralArray = [];
    while(startRow <= endRow && startCol <= endCol) {
        for(let col = startCol; col <= endCol; col++) {
            console.log("1st",array[startRow][col])
            spiralArray.push(array[startRow][col])
        }
        for(let row = startRow + 1; row <= endRow; row++) {
            console.log("2nd",array[row][endCol])
            spiralArray.push(array[row][endCol])
        }
        for(let col = endCol - 1; col >= startCol; col--){
            if(startRow === endRow)break;
            spiralArray.push(array[endRow][col]);
        }
        for(let row = endRow - 1; row > startRow; row--){
            if(startCol === endCol)break;
            spiralArray.push(array[row][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return spiralArray;
}

const arr = [[1, 2, 3, 4 ],[12,13,14,5 ],[11,16,15,6 ],[10,9, 8, 7 ]]

console.log(spiralTraverse(arr))