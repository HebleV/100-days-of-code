function findTriplets(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] < arr[j] && arr[j] < arr[k]) {
          console.log(arr[i], arr[j], arr[k]);
          count++;
        }
      }
    }
  }
  return count;
}

console.log(findTriplets([4, 1, 2, 6, 9, 7, 2]));
// console.log(findTriplets([1,2,3,4,5,6]))
