//Solution 1 => Good for small integers or input. 
// function isPrime(n){
//     for(let i = 2; i<n; i++){
//         console.log("i => ", i)
//         if(n % i == 0){
//             return 'not prime';
//         }
//     } return 'prime';
// }

// console.log(isPrime(25));

//Check the diff between 2 wrt for loops
//Sol 2 => Best for all size num or input.
function isPrime(n){
    for(let i = 2; i*i<=n; i++){
        console.log("i => ", i)
        if(n % i == 0){
            return 'not prime';
        }
    } return 'prime';
}

console.log(isPrime(1000000007));