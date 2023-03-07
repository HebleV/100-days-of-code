// Given an array of integers, every element appears thrice except for one, 
// which occurs once.
function singleNumber(A){
    let ans = 0;
    for (let j = 0; j < 32; j++){
        let count = 0
        for (let i = 0; i < A.length; i++) {
            if (A[i] & (1 << j)) count++ 
        }
        if (count % 3 != 0) ans = ans | 1<<j
    }
    return ans
}
console.log(singleNumber([1, 2, 4, 3, 3, 2, 2, 3, 1, 1]))