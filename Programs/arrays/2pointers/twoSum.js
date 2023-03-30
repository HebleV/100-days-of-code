//This is applicable only when array is sorted or when you can sort
// TC - O(N) and space - O(1)
function twoSum(arr, k){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i] + arr[j] === k){
            return [i,j];
        } else if(arr[i] + arr[j] > k){
            j--;
        } else if(arr[i] + arr[j] < k){
            i++;
        } 
    }
    return false;
}

const arr1 = [1,3,5,7,11,13,19];
console.log(twoSum(arr1,10))