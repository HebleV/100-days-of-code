//This is using XOR and without extra space
//O(n)
function occuringOnce(arr){
    let res = arr[0];
        for (let i = 1; i < arr.length; i++){
            console.log( res,arr[i], "=>",res^arr[i])
            res = res ^ arr[i];
            // console.log("res =>", res)
        }
        return parseInt(res);
}

// function occuringOnce(arr) {
//   let ans = 0;
//   // xor of all the elements of the array
//   arr.forEach((ele) => (ans ^= ele));
//   return ans;
// }

//Using sorting
//O(nlogn)
// function occuringOnce(arr){
//     arr.sort((a,b) => a - b);
//     let i = 0;
//     while(i < arr.length){
//         if(arr[i] != arr[i+1]){
//             return arr[i];
//         }
//         i = i + 2;
//     }
// }

console.log(occuringOnce([1, 3, 2, 2, 1]));
