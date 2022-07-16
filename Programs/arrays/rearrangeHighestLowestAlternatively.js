// O(n) time || O(n) space
function rearrangeHighestLowestAlternatively(arr) {
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  const alternateArr = [];
  while (left <= right) {
    if (left === right) {
      alternateArr.push(arr[right]);
      break;
    }
    alternateArr.push(arr[right]);
    alternateArr.push(arr[left]);
    right--;
    left++;
  }
  return alternateArr;
}

// O(n) time || O(1) space
// function rearrangeHighestLowestAlternatively(arr) {
//   arr.sort((a, b) => a - b);
//   // Declare mini, maxi and max element
//   let mini = 0;
//   let maxi = arr.length - 1;
//   let maxEle = arr[arr.length - 1] + 1;
//   for (let i = 0; i < arr.length; i++) {
//       // If Even then use maxi
//     if (i % 2 === 0) {
//       arr[i] = arr[i] + (arr[maxi] % maxEle) * maxEle;
//       maxi--;
//     } else {
//       // If Odd then use mini
//       arr[i] = arr[i] + (arr[mini] % maxEle) * maxEle;
//       mini++;
//     }
//   }
//   // Now we are storing different values in array i.e. [31,8,27,16,23]
//   // If we do (arr[i] % maxEle) on this new processed arr then we get original arr
//   // If we divide this new arr by maxEle then we alternate arr
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(arr[i] / maxEle);
//   }
//   return arr;
// }


console.log(rearrangeHighestLowestAlternatively([3, 2, 5, 4, 1, 6]));
