// function moveNegativeElementsToLast(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while(i < j) {
//         if(arr[j] < 0){
//             j--;
//         }
//         else if(arr[i] > 0){
//             i++;
//         } else if(arr[i] < 0 && arr[j] > 0) {
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//             i++;
//             j--;
//         }
//     }
//     return arr
// }

// Lomuto technique
function moveNegativeElementsToLast(arr) {
  let i = -1;
  let j = 0;
  while (j < arr.length) {
    if (arr[j] > 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  return arr;
}

console.log(moveNegativeElementsToLast([1, -1, 3, 2, -7, -5, 11, 6, -9]));
