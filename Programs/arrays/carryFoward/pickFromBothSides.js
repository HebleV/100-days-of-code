function pickFromBothSides(arr, val){
    let maxSum=0;
        for(let i=0;i<val;i++){
            maxSum+=arr[i];
        }
        let leftindx=val-1;
        let rightindx=arr.length-1;
        let tempsum=maxSum;
        for(let i=0;i<val;i++){
             tempsum= tempsum-arr[leftindx-i]+arr[rightindx-i];
             maxSum=Math.max(maxSum,tempsum);
        }      
        return maxSum;
}

const arr1 = [5, -2, 3 , 1, 2]
console.log(pickFromBothSides(arr1,3))