// function subArrayWith0Sum(arr){
//     let sum = 0;
//     let hashMap = new Map();
//     hashMap.set(0);
//     console.log("hashMap",hashMap)
//     for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i];
//         console.log("sum", sum, arr[i])
//         if(hashMap.has(sum)){
//             return 1
//         } else {
//             hashMap.set(sum);
//         }
//     }
//     console.log("hashMap 2",hashMap)

//     return 0
// }

function subArrayWith0Sum(arr){
    for(let i = 0; i<arr.length; i++){
        let sum = 0;
        for(let j = i; j<arr.length; j++){
            sum = sum + arr[j];
            if(sum === 0){
                return 1;
            } 
        }
    }
    return 0
}

const arr1 = [1, 2, 3,4, 5];
const arr2 = [1,-1];

console.log(subArrayWith0Sum(arr2))