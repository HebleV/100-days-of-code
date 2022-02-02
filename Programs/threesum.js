let threeSum = function(nums) {
    for(var i=0;i< nums.length;i++) {
        for(var j=i+1;j < nums.length;j++){
            for(var k=j+1;k < nums.length;k++) {
                if(nums[i] + nums[j] + nums[k] == 0) {
                    return [i,j,k];
                }
                
            }
        }
    }
};
let x = threeSum([1,2,3,4]);