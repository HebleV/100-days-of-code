function fiboEvenSum(n){
    let a = 1;
    let b = 2;
    let sum = b;
    while(b <= n){
        let temp = a;
        a = b;
        b = temp + b;
        if(b % 2 === 0){
            sum += b;
        }
    }
    return sum;
}
console.log(fiboEvenSum(60));