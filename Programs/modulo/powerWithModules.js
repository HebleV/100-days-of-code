// You are given A, B and C .
// Calculate the value of (A ^ B) % C
//O(N)
function powerWithModules(A, B, C) {
//   let res = BigInt(1);
//   for (let i = 1; i <= B; i++) {
//     res = (res * BigInt(A)) % BigInt(C);
//   }
//   return Number(res);

let res = 1;
    for(let i = 1; i <= B; i++){
        // In the first technique, the res might overflow if there are huge input values resulting in greater than 10^18 value.
        // And data types cannot store anything more than 10^18.
        // So to avoid it, we can use modulo function with res and A as it will be within limits.
        //(A * B)%C === A%C * B%C
        // res = (res*A)%C
        res = ((res%C)*(A%C))%C;
    }
    return res;
}
console.log(powerWithModules(9, 4, 3));
