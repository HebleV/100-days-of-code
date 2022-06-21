// function flatArr(arr){
//    return arr.flat();
// }

// let newArr = [];
// const flatArr = (arr) => {
//   return arr.reduce((prev, curr) => {
//     if (Array.isArray(curr)) {
//       return prev.concat(flatArr(curr));
//     }
//     return prev.concat(curr);
//   }, []);
// };


//Brute force method

function flatArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        if (!Array.isArray(arr[i][j])) {
          newArr.push(arr[i][j]);
        }
        flatArr(arr[i][j]);
      }
    }
  }
  return newArr;
}
flatArr([1, [2, 3],[4,5,[6,7,[[8,9]]]]]);
console.log(flatArr([1, 2, [3, 4], [5, [[6, 7]]]]));
// console.log(newArr);
