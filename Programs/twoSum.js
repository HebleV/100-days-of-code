// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// const twoSum = function(nums, target) {
//     const comp = {};
//     for(let i=0; i<nums.length; i++){
//         if(comp[nums[i] ]>=0){
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i
//     }
// };

// const twoSum = function(nums, target) {
//     let obj = {}
//     let len = nums.length;
//     for(let i = 0;i < len; i++) {
//         let containKey = target - nums[i];
//         if(obj[containKey]!=undefined) {
//             return [obj[containKey],i]
//         }
//         obj[nums[i]] = i;
//     }
// };


// O(nlog(n)) && O(1) for space
const twoSum = (arr, target) => {
    arr.sort = (a,b) => a - b;
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        currentSum = arr[left] + arr[right];
        if(currentSum === target) {
            return [arr[left], arr[right]];
        } else if(currentSum < target) {
            left++;
        } else if(currentSum > target) {
            right--;
        } else {
            return [];
        }
    }
}

console.log(twoSum([-4,-1,1,3,5,6,8,11],13))


