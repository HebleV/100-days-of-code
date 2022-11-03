// O(N^2)
//Steps
// 1. First transpose the entire matrix
// 2. Reverse each row
function rotateMatrix(arr) {

    //Transpose
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }

  //Reverse
  for (let i = 0; i < arr.length; i++) {
    //Classic swap method using destructuring
    // let first = 0;
    // let last = arr.length - 1;
    // while(first < last){
    //     [arr[i][first],arr[i][last]] = [arr[i][last],arr[i][first]]
    //     first++;
    //     last--;
    // }

    //Using JS reverse
    arr[i].reverse();
  }
  function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
  }
  return arr;
}

const arr1 = [
  [1, 2],
  [3, 4],
];

console.log(rotateMatrix(arr1));
