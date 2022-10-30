// You are given two integers A and B.
// Return 1 if B-th bit in A is set
// Return 0 if B-th bit in A is unset
//O(1) && SC(1)
function setOrUnset(A, B){
    if((A >> B)& 1){
        return 1
    } else {
        return 0
    }
}

console.log(setOrUnset(5,2))