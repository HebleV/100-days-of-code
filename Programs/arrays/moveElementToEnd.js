// function moveElementToEnd(array, toMove) {
//     let i = 0;
//     let j = array.length - 1;
//     while(i < j) {
//         while(i < j && array[j] === toMove) {
//             j--;
//         }
//         if(array[i] === toMove) {
//             [array[i], array[j]] = [array[j], array[i]];
//         }
//         i++;
//     }
//     return array;
// }


// Lomuto technique
function moveElementToEnd(arr, toMove) {
  let i = -1;
  let j = 0;
  while (j < arr.length) {
    if (arr[j] !== toMove) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  return arr;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
