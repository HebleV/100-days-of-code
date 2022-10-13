function printAllSubarrayIndex(arr,start){
    let subArr = [];
    for(let i = start; i<arr.length; i++){
        for(let j = i; j<arr.length; j++){
            let smallArr = [];
            for(let k = i; k <=j; k++){
                smallArr.push(arr[k]);
            }
            subArr.push(smallArr);
        }
    }
    return subArr;
}

console.log(printAllSubarrayIndex([5,7,8,9,-5,2,4,1],2))