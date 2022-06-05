// function isSorted(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i+1] && (arr[i+1] > arr[i])){
//             continue;
//         } else if(arr[i+1] && (arr[i+1] < arr[i])){
//             return false;
//         }
//     }
//     return true;
// }

// function isSorted(arr){
//     return arr.reduce((a,v) => (a!==false) && (a >= v) ? v : false, +Infinity);
// }

function isSorted(array){
   return array.every((v, i) => (i === 0 || v <= array[i - 1]))
  || array.every((v, i) => (i === 0 || v >= array[i - 1]))
}


console.log(isSorted([1,3,2]));