function countUniqueEle(arr){
    let hashMap = new Map();
    let value = 0;
    let count = 0;
    for(let i = 0; i<arr.length; i++){
        if(hashMap.has(arr[i])){
            value = hashMap.get(arr[i])
            hashMap.set(arr[i],value+1);
        } else {
            hashMap.set(arr[i],1);
        }
    }
    for(let j of hashMap.entries()){
        if(j[1] === 1){
        count++;
        }
    }
    return count;
}

// function countUniqueEle(A){
//     let countMap = new Map();
//     for(let i = 0; i < A.length; i++){
//         if(countMap.has(A[i])){
//             countMap.set(A[i], (countMap.get(A[i]) + 1));
//         }else{
//             countMap.set(A[i], 1);
//         }
//     }
//     let count = 0;
//     for(let j of countMap.entries()){
//         if(j[1] === 1){
//             count++;
//         }
//     }
//     return Number(count);
// }

const arr1 = [3, 3, 3, 9, 0, 1, 0];
console.log(countUniqueEle(arr1));