function moveZeroes(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        while(i < j && arr[j] === 0){
            j--;
        }
        if(arr[i] === 0){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
        i++;
    }
    return arr
}

console.log(moveZeroes([1,0,2,3,0,0,4,0,5,6]))