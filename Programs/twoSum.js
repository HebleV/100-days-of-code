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
const twoSum = (array, targetSum) => {
    if(array.length < 2 || array.length === 0) return [];
    let sortedArr = array.sort((a,b) => a - b);
    let left = 0;
    let right = sortedArr.length - 1;
    while(left < right) {
        let currentSum = sortedArr[left] + sortedArr[right];
        if(currentSum === targetSum){
            return [sortedArr[left],sortedArr[right]];
        } else if(currentSum < targetSum){
            left++;
        } else if(currentSum > targetSum){
            right--;
        } 
            
    } return []
}

console.log(twoSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 310))


