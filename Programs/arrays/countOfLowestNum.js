//Given N array elements count number of elements having atleast I element greater than itself
// function countOfLowestNum(arr){
//     let max = 0;
//     let maxCount = 0;
//     for(let i = 0; i <arr.length; i++){
//         if(arr[i] > max && arr[i] !== max){
//             max = arr[i];
//             console.log("max", max)
//         }
//     }
//     for(let i = 0; i <arr.length; i++){
//         if(max === arr[i]){
//             console.log("max 1", max)
//                 maxCount++;
//             console.log("maxCount", maxCount)
//         }
//     }
//     return arr.length - maxCount;
// }

function countOfLowestNum(arr){
    let max = 0;
    let maxCount = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            maxCount = 1;
        } else if(arr[i] === max){
            maxCount++;
        }
    }
    return arr.length - maxCount;
}

console.log(countOfLowestNum([3,1,2,0,4,6,5,6,7]))
// console.log(countOfLowestNum([2,5,0,-1,6,3,7,6,5,7]))
