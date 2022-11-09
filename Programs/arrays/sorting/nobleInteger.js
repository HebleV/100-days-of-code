//Given an integer array A, find if an integer p exists in the array
//such that the number of integers greater than p in the array equals p.
//Brute force => O(N^2)
// function nobleInteger(arr){
//     let noble = 0;
//     let countSmaller;
//     for(let i = 0; i<arr.length; i++){
//         countSmaller = 0;
//         for(let j = 0; j<arr.length; j++){
//             if(arr[j]<arr[i]){
//                 countSmaller++;
//             }
//         }
//         if(countSmaller == arr[i]){
//             noble++;
//         }
//     }
//     return noble;
// }

//using sort
//use descending sort for greater than p else ascending for lesser than p
//nlogn + n => O(nlogn)
function nobleInteger(arr) {
  let noble = 0;
  arr.sort((a, b) => b - a);
  console.log("xx", arr);
  if (arr[0] == 0) return Number(1);
  for (let i = 0; i < arr.length; i++) {
      //Check only for first occurence of num if its noble
    if (arr[i] !== arr[i - 1]) {
      noble = i;
    }
    if (arr[i] == noble) {
      return 1;
    }
  }

  return -1;
}
const arr1 = [5, 6, 2];
console.log(nobleInteger(arr1));
