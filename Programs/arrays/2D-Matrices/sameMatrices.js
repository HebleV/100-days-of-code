function sameMatrices(arr1, arr2){
    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr1[i].length; j++){
            if(arr1[i][j] !== arr2[i][j]){
                return 0;
            }
        }
    }
    return 1;
}
const A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
const B = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

console.log(sameMatrices(A,B));