function rowSum(arr){
    const sumArr = [];
    let sum;
    for(let i = 0; i<arr.length;i++){
        sum = 0;
        for(let j = 0; j<arr[i].length; j++){
            sum = sum + arr[i][j];
        }
        sumArr.push(sum);
    }
    return sumArr
}

const arr = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 2, 3, 4]];
console.log(rowSum(arr));