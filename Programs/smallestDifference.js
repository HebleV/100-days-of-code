// o(nlog(n) + mlog(m)) time && o(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallestPair = [];
  let smallestDiff = Infinity;
  let currentVal = Infinity;
  let left = 0;
  let right = 0;
  while (left < arrayOne.length && right < arrayTwo.length) {
    let leftVal = arrayOne[left];
    let rightVal = arrayTwo[right];
    if (leftVal < rightVal) {
      currentVal = rightVal - leftVal;
      left++;
    } else if (leftVal > rightVal) {
      currentVal = leftVal - rightVal;
      right++;
    } else {
      return [leftVal, rightVal];
    }
    if (smallestDiff > currentVal) {
      smallestDiff = currentVal;
      smallestPair = [leftVal, rightVal];
    }
  }
  return smallestPair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
