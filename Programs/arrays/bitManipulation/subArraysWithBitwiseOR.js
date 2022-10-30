// Given an array B of length A with elements 1 or 0. Find the number of subarrays with bitwise OR 1.

function subArraysWithBitwiseOR(A,B){
    let last = 0;
     let ans = 0;
     for(let i = 0; i<B.length; i++){
         if(B[i] == 1) last = i+1;
         ans = ans + last;
     }
     return ans;
}

console.log(subArraysWithBitwiseOR(3,[1,0,1]))