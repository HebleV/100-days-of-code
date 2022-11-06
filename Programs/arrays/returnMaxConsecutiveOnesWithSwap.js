//Pgm for k swaps
// function returnMaxConsecutiveOnesWithSwap(arr,k) {
//   let end = 0;
//   let start = 0;
//   let totalOnes = 0;
//   }
//   if (totalOnes == 0) {
//     return 0;
//   }
//   while (end < arr.length) {
//     if (arr[end] == 0) {
//       k--;
//     }
//     if (k < 0) {
//       if (arr[start] == 0) {
//         k++;
//       }
//       start++;
//     }
//     end++;
//   }
//     return end - start;
//   }
// }

function returnMaxConsecutiveOnesWithSwap(arr) {
  let answer = 0;
  let totalOneCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      totalOneCount++;
    }
  }
  if (totalOneCount == arr.length) {
    return totalOneCount;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      let leftCount = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] == 0) break;
        leftCount++;
      }
      let rightCount = 0;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] == 0) break;
        rightCount++;
      }
      if (totalOneCount > rightCount + leftCount) {
        answer = Math.max(answer, rightCount + leftCount + 1);
      } else {
        answer = Math.max(answer, rightCount + leftCount);
      }
    }
  }
  return answer;
}

const arr1 = [0, 0, 0, 0, 0, 0, 0];
const arr2 = [1, 1, 0, 1, 1, 0, 1];
const arr3 = [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const arr4 = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
const arr5 = [0, 0, 1, 0, 0, 0, 1, 1];
const arr6 = [0, 1, 1, 1, 1, 1, 0, 1, 1, 0];
console.log(returnMaxConsecutiveOnesWithSwap(arr6));
