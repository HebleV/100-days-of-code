// function evenNumberInRange(arr, queries) {
//   let evenArr = [];
//   //loop through arr as per queries
//   for (let i = 0; i < queries.length; i++) {
//     let counter = 0;
//     for (let j = queries[i][0]; j <= queries[i][1]; j++) {
//       console.log("arr", j);
//       if (arr[j] % 2 == 0) {
//         counter++;
//       }
//     }
//     evenArr.push(counter);
//   }
//   return evenArr;
// }

function evenNumberInRange(arr, queries) {
  let evenArr = [];
  let prefixArr = [];
  if (arr[0] % 2 == 0) {
    prefixArr[0] = 1;
  } else {
    prefixArr[0] = 0;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      prefixArr[i] = prefixArr[i - 1] + 1;
    } else {
      prefixArr[i] = prefixArr[i - 1];
    }
  }
  console.log("prefixArr", prefixArr);
  for (let j = 0; j < queries.length; j++) {
    evenArr[j] = prefixArr[queries[j][1]] - prefixArr[queries[j][0]];
    if (arr[queries[j][0]] % 2 == 0){
        evenArr[j] = evenArr[j] + 1;
    } 
  }
  return evenArr;
}

console.log(
  evenNumberInRange(
    [1,2,3,4,5],
    [
      [0,2],
      [1,4],
    ]
  )
);
