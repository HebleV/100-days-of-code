//Find the address of 0 in matrix[row][col]
//Then push the above row,col into new arr
//Write a helper function to make every item of above row and col to 0 and call this helper function on the row,col of new arr

const changeToZeroes = (row, col, matrix) => {
    for(let i = 0; i<matrix.length; i++) {
         matrix[row][i] = 0;
    }
    for(let j = 0; j<matrix[0].length; j++) {
       return matrix[j][col] = 0;
    }
}
let setZeroes = function(matrix) {
    const zeroesAddress = [];
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            if(matrix[row][col] === 0) {
                console.log("ss",[row,col])
                zeroesAddress.push([row,col]);
            }
        }
    for(let address of zeroesAddress) {
        let row = address[0];
        let col = address[1];
        changeToZeroes(row, col, matrix);
    }
    }
}

let x = setZeroes([[1,1,1],[1,0,1],[0,1,1]])
console.log({x});