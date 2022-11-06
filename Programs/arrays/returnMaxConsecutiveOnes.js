function returnMaxConsecutiveOnes(arr){
    let max = 0;
    let currentMax = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == 1){
            currentMax++;
            max = Math.max(max, currentMax);
        } else {
            currentMax = 0;
        }
    }
    return max;
}
 
const arr1 = [1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0]
const arr2 = [1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0]

console.log(returnMaxConsecutiveOnes(arr2))
