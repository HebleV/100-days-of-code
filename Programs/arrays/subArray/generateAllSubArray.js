function generateAllSubArray(A) {
    let returnArr = [];
        for(let i = 0; i < A.length; i++) {
            for(let j = i; j < A.length; j++) {
                let subArr = [];
                for(let k = i; k <= j; k++) {
                    subArr.push(Number(A[k]));
                    console.log("i,j,k,subArr", i,j,k,subArr)
                }
                returnArr.push(subArr);
            }
        }
        return returnArr;
}

console.log(generateAllSubArray([1,2,3]))