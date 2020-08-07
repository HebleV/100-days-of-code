function largestPrimeFactor(num) {
    if(isPrime(num)) return num;
    let largest = 1;
    for (let i = 1; i <= Math.sqrt(num);i+=2){
        if(num % i === 0 && isPrime(i)) {
            largest = i;
        }
    }
    return largest;
}

function isPrime(num){
    if(num % 2 === 0 && num !== 2) return false;

    for(let i = 3; i < Math.sqrt(num);i += 2){
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(largestPrimeFactor(11));