function toggleBit(A,B){
    return (1<<B) ^ A;
}

console.log(toggleBit(4,1))