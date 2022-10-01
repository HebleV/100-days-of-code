const reverseArrayinGivenRange = (arr,s,e) => {
    let i = s;
    let j = e;
    while(i<=j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

console.log(reverseArrayinGivenRange([1,2,3,4,5,6,7,8],2,5));