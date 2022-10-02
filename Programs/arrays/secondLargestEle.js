// function secondLargestEle(A) {
//   let maxEle = 0;
//   let secondMaxEle = 0;
//   A.sort((a,b) => a-b);
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > maxEle) {
//         secondMaxEle = maxEle;
//         maxEle = A[i];
//     }
//   }
//     return secondMaxEle;
// }

function secondLargestEle(A) {
  let maxEle = A[0];
  let secondMaxEle = 0;
  for (let i = 1; i < A.length; i++) {
      console.log("i, maxEle, secondMaxEle", i, maxEle, secondMaxEle)
    if (A[i] > maxEle) {
      secondMaxEle = maxEle;
      maxEle = A[i];
    } else if (!secondMaxEle && A[i]!==maxEle) {
      secondMaxEle = A[i];
    //   console.log("secondMaxEle 1", secondMaxEle)
    } else if (A[i] >= secondMaxEle && A[i]!==maxEle) {
      secondMaxEle = A[i];
    }
  }
  return secondMaxEle;
}

console.log(secondLargestEle([ 10, 10, 9, 8, 1 ]));
// console.log(secondLargestEle([5,4,3,6,2,1]));
