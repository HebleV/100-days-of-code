//O(logn)
function anyBaseToDecimal(num, decimal){
    let ans = 0;
        let p = 0;
        let temp = 0;
        while(num > 0){
            temp = num % 10;
            ans += temp * Math.pow(decimal, p);
            console.log(ans)
            num = parseInt(num / 10);
            p++;
        }
        return ans;
}

console.log(anyBaseToDecimal(22,3))