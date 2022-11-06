//Print count of only the consecutive ones on left of zeroes
//Bruteforce => O(N)
function printOnesFromLeft(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    } else {
      if (count > 1) {
        console.log(count);
        count = 0;
      } else {
          count = 0;
      }
    }
  }
}

// function printOnesFromLeft(arr){
//     let count = 0;
//     for(let i = arr.length-1; i>=0; i--){
//         // console.log(arr[i])
//         if(arr[i] == 1){
//             count++;
//         } else {
//             console.log(count)
//             count = 0;
//             // break;
//         }
//     }
// }
console.log(printOnesFromLeft([1, 0, 0, 1, 1, 0, 1, 1, 1]));
