// Given three 2-digit integers, A, B, and C, find out the minimum number obtained by 
// concatenating them in any order.

// Return the minimum result obtained.
function concatenate3Num(A,B,C){
    let firstLeast = Math.min(Math.min(A,B),C);
    let thirdLeast = Math.max(Math.max(A,B),C);
    let secondLeast = (A+B+C) - (firstLeast+thirdLeast);
    return `${firstLeast}${secondLeast}${thirdLeast}`;
}
console.log(concatenate3Num(55,43,47))