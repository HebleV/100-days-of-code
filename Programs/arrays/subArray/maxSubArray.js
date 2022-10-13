function maxSubArray(size,sum,arr){
    let maxSum = 0;
    for(let i = 0; i < size;i++){
        let subArrSum = 0;
        for(let j = i;j<size;j++){
        console.log("i,j", i,j)
            subArrSum = subArrSum + arr[j];
            if(subArrSum > sum) break;
            if(subArrSum > maxSum && subArrSum <= sum){
                maxSum = subArrSum;
                console.log("maxSum", maxSum)
            }
            console.log("subArrSum",subArrSum);
        }
    }
    return maxSum || 0;
}

console.log(maxSubArray(5,7,[3,8,8,9,7]))