function antiDiagonals(arr) {
  const newArr = [];
  let subArr;

  //O(M*N)
  //Diagonals from first row
  for (let i = 0; i < arr.length; i++) {
    console.log("hi =>", i);
    let row = 0;
    let col = i;
    subArr = [];
    while (row < arr.length && col >= 0) {
      console.log(row, col);
      subArr.push(arr[row][col]);
      console.log("=>", subArr);
      row++;
      col--;
    }
    while (row < arr.length) {
      subArr.push(0);
      row++;
    }
    newArr.push(subArr);
  }

  //Diagonals from last colum or second row
  for (let j = 1; j < arr.length; j++) {
    subArr = [];
    let row = j;
    let col = arr.length - 1;
    let k = 0;
    while (row < arr.length && col >= 0) {
      subArr.push(arr[row][col]);
      row++;
      col--;
    }
    while (k <= col) {
      k++;
      subArr.push(0);
    }
    newArr.push(subArr);
  }
  return newArr;
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(antiDiagonals(arr));
