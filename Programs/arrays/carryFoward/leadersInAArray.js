// function leadersInAArray(arr){
//     const newArr = [];
//     let max;
//     for(let i = 0; i < arr.length; i++){
//         max = arr[i];
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 max = arr[i]
//                 newArr.push(max);
//             }
//         }
//     }
//     return newArr
// }

// O(N)
function leadersInAArray(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let leadersArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] > max){
        max = arr[i];
        leadersArr.push(max)
    }
  }
  return leadersArr;
}

console.log(leadersInAArray([16, 17, 4, 3, 5, 2]));
