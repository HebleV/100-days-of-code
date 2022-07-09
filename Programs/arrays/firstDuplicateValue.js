//brute force => O(n^2) && O(1)
// function firstDuplicateValue(arr) {
//   let min = arr.length;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         min = Math.min(min, j);
//       }
//     }
//   }
//   if (min === arr.length) {
//     return -1;
//   }
//   return arr[min];
// }

//Using set => O(n) && O(n)
function firstDuplicateValue(arr) {
  const uniqueSet = new Set();
  for (let ele of arr) {
    if (uniqueSet.has(ele)) {
      return ele;
    } else {
      uniqueSet.add(ele);
    }
  }
  return -1;
}

console.log(firstDuplicateValue([2,1,5, 3, 3,2, 4]));
