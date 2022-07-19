// function findOnlyRepeatingElement(arr){
//     const uniqueSet = new Set();
//     for(let ele of arr){
//         if(uniqueSet.has(ele)){
//             return ele
//         } else {
//             uniqueSet.add(ele)
//         }
//     }
//     return -1
// }

function findOnlyRepeatingElement(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                return arr[i]
            } 
        }
    }
    return -1
}

console.log(findOnlyRepeatingElement([1,2,3,4,4]))