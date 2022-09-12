function countOfPairs(A, B){
    let count = 0;
    for(let i = 0; i <= A.length - 1; i++) {
        for(let j =  i + 1; j<= A.length - 1; j++) {
            if(A[i] + A[j] === B){
                count++;
            }
        }
    }
    return count;
}

A = [1,2,3,2,1]
B = 5

console.log(countOfPairs(A,B))