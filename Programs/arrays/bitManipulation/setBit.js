//O(1)
function setBit(A,B){
    return 1<<A | 1<<B;
}

console.log(setBit(4,4))