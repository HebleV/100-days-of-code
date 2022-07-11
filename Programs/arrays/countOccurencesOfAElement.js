//Using linear search => O(n) && O(1)
// function countOccurencesOfAElement(arr,n){
//     let count = 0;
//     for(let ele of arr) {
//         if(ele === n){
//             count++;
//         } 
//     }
//     return count;
// }

function countOccurencesOfAElement(arr,n) {
    arr.sort((a,b) => a-b);
    let mid = Math.floor(arr.length/2);
    if(n === arr[mid]) {
        return mid
    }
    if(arr[mid] > n){

    }
}

console.log(countOccurencesOfAElement([1,2,3,2,4,2,5,2],2))