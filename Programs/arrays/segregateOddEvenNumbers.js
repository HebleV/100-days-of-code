//Here we dont maintain the order

// function segregateOddEvenNumbers(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     if (arr[j] % 2 !== 0) {
//       j--;
//     } else if (arr[i] % 2 === 0) {
//       i++;
//     } else if (arr[i] % 2 !== 0 && arr[j] % 2 === 0) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   return arr;
// }

// Follow this method if we need to maintain the order
function segregateOddEvenNumbers(arr) {
  let i = -1;
  let j = 0;
  while (j !== arr.length) {
    if (arr[j] % 2 === 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    j++;
  }
  return arr;
}

console.log(segregateOddEvenNumbers([1, 3, 2, 4, 7, 6, 9, 10, 11]));
