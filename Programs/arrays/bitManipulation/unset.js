function unset(A,B){
    return A & ~(1<<B);
}

console.log(unset(5,2))