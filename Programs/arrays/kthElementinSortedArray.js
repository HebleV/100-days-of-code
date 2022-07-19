// O(nlogn) && O(m+n)
// function kthElementinSortedArray(arr1, arr2, k) {
//   const finalArr = arr1.concat(arr2);
//   finalArr.sort((a, b) => a - b);
//   return finalArr[k-1];
// }

function kthElementinSortedArray(arr1, arr2, k) {
  let i = 0;
  let j = 0;
  let counter = 0;
  const finalArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      finalArr.push(arr2[j]);
      counter++;
      j++;
    } else {
      finalArr.push(arr1[i]);
      counter++;
      i++;
    }
    if (counter === k) return finalArr[counter - 1];
  }
}

console.log(kthElementinSortedArray([2, 3, 6, 7, 9], [1, 4, 8, 10], 6));
