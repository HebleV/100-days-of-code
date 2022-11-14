// Given an array A of non-negative integers, arrange them such that they form the largest number.

// Note: The result may be very large, so you need to return a string instead of an integer.
// function largestNum(arr){
//     let strNum = "";
//     arr = arr.sort((a,b) => {
//         let n1 = Number(''+a+''+b);
//         let n2 = Number(''+b+''+a);
//         if(n1 > n2){
//             return -1
//         } else {
//             return 1
//         }
//     })
//     let zeroes = 0;
//     for(let i = 0; i<arr.length; i++){
//         //For handling edge cases where all entries would be zeroes like in arr2
//         if(arr[i] == 0){
//             zeroes++;
//         }
//         strNum = strNum+arr[i];
//     }
//     return zeroes == arr.length ? 0 : strNum;
// }

function largestNum(arr){
    arr.sort((a,b) => {
        let n1 = ""+a+b;
        let n2 = ""+b+a;
        if(n1>n2){
            return -1
        } else {
            return 1;
        }

    })
    return arr.join("").toString();
}
const arr1 = [3, 30, 34, 5, 9];
const arr2 = [0,0,0,0];
console.log(largestNum(arr1))