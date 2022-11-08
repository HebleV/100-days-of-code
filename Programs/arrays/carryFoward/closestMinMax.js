// Find the smallest subarr which has both min and max of an array
//O(N)
function closestMinMax(arr) {
  let ans = Number.POSITIVE_INFINITY;
  let subArrLen;
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
    min = Math.min(arr[i], min);
  }

  if (max == min) return 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] == max) {
          break;
        }
        if (arr[j] == min) {
          subArrLen = j - i + 1;
          ans = Math.min(ans, subArrLen);
          break;
        }
      }
    }

    if (arr[i] == min) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] == min) {
          break;
        }
        if (arr[j] == max) {
          subArrLen = j - i + 1;
          ans = Math.min(ans, subArrLen);
          break;
        }
      }
    }
  }
  return ans;
}

const arr1 = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1];
const arr2 = [4, 4, 4, 4, 4];
const arr3 = [1, 2];
const arr4 = [2];

console.log(closestMinMax(arr1));
