// Count of num of primes until a given num A
// function countOfPrimes(n){
//     let count = 0;
//     for(let i = 1; i<=n; i++){
//         for(let j = 2; j <= i; j++){
//             if(i % j !== 0){
//                 if(j == i - 1 || j == i){
//                     count++;
//                 }

//             } else {
//                 break;
//             }
//             console.log("i =>", i)
//             console.log("j =>", j)
//         }
//     }
//     return count + 1;
// }

// function countOfPrimes(A) {
//   let count = 0;
//   if (A <= 1) return 0;
//   for (let i = 2; i <= A; i++) {
//     let flag = 0;
//     for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
//       if (i % j == 0) {
//         flag = 1;
//         break;
//       }
//     }
//     if (flag == 0) count++;
//   }
//   return count;
// }

function countOfPrimes(n){
  let count = 0;
  for(let i = 2; i<=n;i++){
    let flag = 0;
    for(let j = 2; j*j<=i;j++){
      if(i % j == 0){
        console.log("i,j",i,j)
        flag = 1;
        break;
      }
    } 
    if(flag == 0) count++;
  } 
  return count;
}

console.log(countOfPrimes(19));
