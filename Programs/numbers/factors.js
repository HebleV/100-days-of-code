//find the count of factors

function findFactors(A) {
    let count = 0;
    for(let i = 1; i <= A/i; i++){
        if(A % i === 0){
            if(i === A/i){
                count++;
            } else {
                count = count + 2;
            }
        }
    }
    return count
}

console.log(findFactors(6))