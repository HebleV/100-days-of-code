// function checkPairSum(val, arr){
//     let diff;
//     for(let i = 0; i<arr.length; i++){
//         diff = val - arr[i];
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[j] == diff){
//                 return 1;
//             } 
//         }
//     }
//     return 0;
// }

function checkPairSum(val, arr){
    if(arr.length < 2 || arr.length === 0) return [];
    let sortedArr = arr.sort((a,b) => a - b);
    let left = 0;
    let right = sortedArr.length - 1;
    while(left < right) {
        let currentSum = sortedArr[left] + sortedArr[right];
        if(currentSum === val){
            return [sortedArr[left],sortedArr[right]];
        } else if(currentSum < val){
            left++;
        } else if(currentSum > val){
            right--;
        } 
            
    } return []
}

console.log(checkPairSum(8,[3, 5, 1, 2, 1, 2]));