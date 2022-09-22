function powerFunction(A, B){
    let ans = A;
    for(let i = 1; i < B; i++){
        ans = ans * A;
    }
    return ans
}

console.log(powerFunction(2,3));