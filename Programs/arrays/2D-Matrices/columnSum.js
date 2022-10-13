function columnSum(arr) {
    const sumArr = [];
    let sum;
    for(let i = 0;i<arr[0].length;i++){
        sum = 0;
        for(let j = 0; j<arr.length;j++){
            sum = sum+arr[j][i]
        }
        sumArr.push(sum);
    }
    return sumArr;
}

const arr = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 2, 3, 4]];
console.log(columnSum(arr));
