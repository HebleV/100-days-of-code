// function moveZeroes(arr){
//     let i = 0;
//     let j = arr.length - 1;
//     while(i < j) {
//         while(i < j && arr[j] === 0){
//             j--;
//         }
//         if(arr[i] === 0){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//         i++;
//     }
//     return arr
// }


// Lomuto technique
function moveZeroes(arr) {
  let i = -1;
  let j = 0;
  while (j < arr.length) {
    if (arr[j] !== 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  return arr;
}

console.log(moveZeroes([1, 0, 2, 3, 0, 0, 4, 0, 5, 6]));
