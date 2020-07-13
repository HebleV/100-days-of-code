
// function fizzbuzz(n) {
//     for (let i =1;i <= n;i++) {
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log('fizzbuzz');
//        } else if(i % 3 == 0) {
//         console.log('fizz');
//         } else if(i % 5 == 0) {
//             console.log('buzz');
//         } else {
//              console.log(i);
//         }
//     }
// }
// console.log(fizzbuzz(5));


// Print fizz at index if it is divisible by 3 and buzz if divisible by 5 and fizzbuzz if divisible by 15
function fizzbuzz(){
    for(let i =1; i < 100; i++) {
      if( i % 15 === 0) {
        console.log('fizzbuzz');
      } else if(i % 3 === 0 ) {
        console.log('fizz');
      } else if(i % 5 === 0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    }
  }
  fizzbuzz();