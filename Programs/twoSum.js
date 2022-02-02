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

var twoSum = function(nums, target) {
    let obj = {}
    let len = nums.length;
    for(let i = 0;i < len; i++) {
        let containKey = target - nums[i];
        if(obj[containKey]!=undefined) {
            return [obj[containKey],i]
        }
        obj[nums[i]] = i;
    }
};



console.log(twoSum([2,7,11,15],9));

