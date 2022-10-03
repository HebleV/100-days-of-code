// function maxMinSum(arr){
//     arr.sort((a,b) => a-b);
//     return arr[0] + arr[arr.length-1];
// }

function maxMinSum(arr){
    let maxVal = arr[0];
    let minVal = arr[0];
    for(let i = 1; i <= arr.length-1;i++){
        if(arr[i] > maxVal){
            maxVal = arr[i];
        } else if(arr[i] < minVal){
            minVal = arr[i];
        }
    }
    return parseInt(maxVal + minVal);
}

console.log(maxMinSum([3,-3,6,8,4,7,8,-2,0]))