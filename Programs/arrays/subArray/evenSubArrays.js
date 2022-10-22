function evenSubArrays(arr) {
  if (arr.length % 2 != 0) return "NO";

  if (arr[0] % 2 == 0 && arr[arr.length - 1] % 2 == 0) {
      return 'YES';
  }
  return 'NO';
}

const arr1 = [2, 4, 6, 8, 9];
console.log(evenSubArrays(arr1));
