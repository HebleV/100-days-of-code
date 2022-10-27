// Given an integer A. Unset B bits from the right of A in binary
function unsetFromRight(A,B){
    A = A>>B;
    return A<<B;
}

console.log(unsetFromRight(25,3))