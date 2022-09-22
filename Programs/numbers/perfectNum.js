// n is a perfect num if its divisors or factors sums up to give n.
// For ex: 6 =? divisors => 1,2,3 => 1+2+3 = 6 (So a perfect num);
function perfectNum(n){
    let divisorSum = 0;
    for(let i = 1; i < n; i++){
        if(n % i == 0) {
            divisorSum = divisorSum + i;
            console.log("x",i)
        console.log("y",divisorSum)
        }
    }
    return divisorSum === n ? 1 : 0;
}

console.log(perfectNum(6))