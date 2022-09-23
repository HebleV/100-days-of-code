// Return the perfect square root of a num else return -1

function sqRoot(A){
    for(let i = 1; i <= A; i++){
        if(i * i === A) {
            return 1;
        } 
    }
    return 0;
}

console.log(sqRoot(1))