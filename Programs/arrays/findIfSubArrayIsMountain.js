function findIfSubArrayIsMountain(arr, range) {
  let i = 1;
  const newArr = arr.slice(range[0], range[1] + 1);
  console.log(newArr)
  while (i <= newArr.length - 1) {
    let isPeak = newArr[i - 1] < newArr[i] && newArr[i] > newArr[i + 1];
    if (!isPeak) {
      i++;
      continue;
    } else {
      return "Yes";
    }
  }
  return 'No'
}

console.log(findIfSubArrayIsMountain([2, 3, 2, 4, 4, 6, 3, 2], [2, 7]));
