function rangeSubArray(arr,start,end){
    const subArr = [];
    for(let i = start; i <= end; i++){
        subArr.push(arr[i]);
    }
    return subArr
}

console.log(rangeSubArray([4,3,2,6],1,3))