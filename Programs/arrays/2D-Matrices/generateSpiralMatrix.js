//Generate a square matrix of size A
//O(N^2)
function generateSpiralMatrix(A) {
    //Create a 2D matrix of size AxA
    //One can also use for loop
  let matrix = [...Array(A)].map(() => Array(A).fill(0));
  let count = 1;
  let row = 0;
  let col = 0;

  while (A > 1) {
    for (let i = 0; i < A - 1; i++) {
      matrix[row][col] = count;
      col++;
      count++;
    }
    for (let i = 0; i < A - 1; i++) {
      matrix[row][col] = count;
      row++;
      count++;
    }
    for (let i = 0; i < A - 1; i++) {
      matrix[row][col] = count;
      col--;
      count++;
    }
    for (let i = 0; i < A - 1; i++) {
      matrix[row][col] = count;
      row--;
      count++;
    }
    row++;
    col++;
    A = A - 2;
  }
  if(A==1) matrix[row][col] = count++;
  return matrix;
}

console.log(generateSpiralMatrix(5));
