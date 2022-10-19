function oddIndicesSum(arr, range) {
    const pf_odd = [];
    const resultArr = [];
    pf_odd[0] = 0;
    for(let i = 1; i<arr.length; i++){
        if(i % 2 != 0){
            pf_odd[i] = pf_odd[i-1] + arr[i];
        } else {
            pf_odd[i] = pf_odd[i-1];
        }
    }
    for(let j = 0; j<range.length; j++){
        if(range[j][0] != 0){
            resultArr[j] = pf_odd[range[j][1]] - pf_odd[range[j][0] - 1];
        } else {
            resultArr[j] = pf_odd[range[j][1]]
        }
    }
    return resultArr;
}

const arr = [1, 2, 3, 4, 5];
const range = [[0, 2],[1, 4]];

console.log(oddIndicesSum(arr,range))
