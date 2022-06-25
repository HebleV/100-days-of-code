// o(nlog(n) + mlog(m)) time && o(1) space
// function smallestDifference(arrayOne, arrayTwo) {
//   arrayOne.sort((a, b) => a - b);
//   arrayTwo.sort((a, b) => a - b);
//   let smallestPair = [];
//   let smallestDiff = Infinity;
//   let currentVal = Infinity;
//   let left = 0;
//   let right = 0;
//   while (left < arrayOne.length && right < arrayTwo.length) {
//     let leftVal = arrayOne[left];
//     let rightVal = arrayTwo[right];
//     if (leftVal < rightVal) {
//       currentVal = rightVal - leftVal;
//       left++;
//     } else if (leftVal > rightVal) {
//       currentVal = leftVal - rightVal;
//       right++;
//     } else {
//       return [leftVal, rightVal];
//     }
//     if (smallestDiff > currentVal) {
//       smallestDiff = currentVal;
//       smallestPair = [leftVal, rightVal];
//     }
//   }
//   return smallestPair;
// }




function smallestDifference(arr1,arr2){
  arr1.sort((a,b) => a - b);
  arr2.sort((a,b) => a - b);
  let ptr1 = 0;
  let ptr2 = 0;
  let num1 = arr1[0];
  let num2 = arr2[0];

  let smallDiff = Math.abs(num1 - num2);
  let smallestPair = [num1, num2];

  while(ptr1 < arr1.length && ptr2 < arr2.length) {
     num1 = arr1[ptr1];
     num2 = arr2[ptr2];
    let currentDiff = Math.abs(num1 - num2);
    if(currentDiff === 0) {
      return [num1,num2]
    } else if(currentDiff < smallDiff) {
      smallDiff = currentDiff;
      smallestPair = [num1, num2];
    } 
    num1 < num2 ? ptr1++ : ptr2++
  }
  return smallestPair;

}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
