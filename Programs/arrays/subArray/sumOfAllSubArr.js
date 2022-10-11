// O(N2)
// function sumOfAllSubArr(arr) {
//   let totalSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum = sum + arr[j];
//       totalSum = totalSum + sum;
//     }
//   }
//   return totalSum;
// }

//       For ith index the number of occurrences are = (n-i)*(i+1)
//        Contribution of each element in totalSum is arrA[i]*(n-i)*(i+1)
// O(N)

function sumOfAllSubArr(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let occurences = arr[i] * (i + 1) * (arr.length - i);
    console.log(occurences);
    totalSum = totalSum + occurences;
  }
  return totalSum;
}
console.log(sumOfAllSubArr([1, 2, 3]));

// [1][1,2][1,2,3]
// [2][2,3]
// [3]

// 1 3 6
// 2 5
// 3
// 20
