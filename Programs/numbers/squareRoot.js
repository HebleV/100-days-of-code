// Return the perfect square root of a num else return -1

function sqRoot(A){
    for(let i = 1; i*i <= A; i++){
        console.log("i",i)
        if(i * i === A) {
            return i;
        }
    }
    return 0;
}

console.log(sqRoot(25))