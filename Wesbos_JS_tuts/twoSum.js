// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

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

console.log(twoSum[1,2,4,5,6],3);