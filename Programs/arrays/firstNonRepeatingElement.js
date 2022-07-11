//Using hashmap => O(n) && O(n)
function firstNonRepeatingElement(arr) {
  const countObj = {};
  for (let ele of arr) {
    countObj[ele] = countObj[ele] + 1 || 1;
  }
  for (let count in countObj) {
    if (countObj[count] === 1) {
      return count;
    }
  }
  return -1;
}

console.log(firstNonRepeatingElement([9, 9, 6, 7, 4]));
