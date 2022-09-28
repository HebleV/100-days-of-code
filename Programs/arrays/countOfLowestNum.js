function countOfLowestNum(arr){
    let max = 0;
    let maxCount = 0;
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > max){
            console.log("yyyy")
            max = arr[i];
            console.log("max", max)
            // if(max === arr[i]){
                maxCount++;
            // }
        }
    }
    return arr.length - maxCount;
}

console.log(countOfLowestNum([3,1,2]))