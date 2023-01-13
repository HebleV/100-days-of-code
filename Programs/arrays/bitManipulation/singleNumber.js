function singleNumber(arr){
    let ans;
    for(let i = 0; i<arr.length; i++){
        ans = ans ^ arr[i];
    }
    return ans;
}

console.log(singleNumber([1, 2, 2, 3, 1]))