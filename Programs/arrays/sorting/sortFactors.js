// You are given an array A of N elements. 
// Sort the given array in increasing order of number of distinct factors 
// of each element, i.e., element having the least number of 
// factors should be the first to be displayed and 
// the number having highest number of factors should be the last one. 
// If 2 elements have same number of factors, 
// then number with less value should come first.
//Note: cannot use any extra space
// function countFactors(num){
    //O(N)
//     let factors=0;
//     for(let i = 1; i<=num; i++){
//         if(num % i == 0){
//             factors++;
//         }
//     }
//     return factors;
// }

// function sortFactors(arr){
//     function countFactors(num){
//         let factors=0;
//         for(let i = 1; i<=num; i++){
//             if(num % i == 0){
//                 factors++;
//             }
//         }
//         return factors;
//     }

//     // Comparator method
//     arr = arr.sort((a,b) => {
//         let f1 = countFactors(a);
//         let f2 = countFactors(b);
//         if(f1 < f2){
//             return -1;
//         } else if(f2 < f1){
//             return 1;
//         } else {
//             if(a < b){
//                 return -1;
//             } else {
//                 return 1;
//             }
//         }
//     })
//     return arr;
// }

//Optimised way where in you don't need to check for all numbers.
//If you know 6 is divisible by 2 i.e. 2*3 = 6 then 6 is also divisible by 3.
function sortFactors(A){

const countFactors = (num) => {
    let factors = 0;
    // O(i*i = N => sqrt of N) => O(sqrt of N)
    for(let i = 1; i*i <= num; i++) {
        if(Number(num) % i == 0) {
            //If i = 3 for num = 9, then 3 == 9/3(true) then it will be just factors = 1;
            //If i = 2 for num = 6, then 2 == 6/3(false) which means 6 will be a factor 
            //of both 2 and 6/2 = 3, hence it will be factors = 2; 
            if(i == Number(num)/i) {
                factors++;
            }  else {
                factors+=2;
            }
        }
    }
    return factors;
}

//Sort based on comparator method
A = A.sort( (a,b) => {
    let f1 = countFactors(a);
    let f2 = countFactors(b);

    if (f1 < f2){
        return -1;
    } else if(f2 < f1){
        return 1;
    } else {
        if(a < b){
            return -1;
        }
        else {
            return 1;
        }
    }
});
return A;
}

const arr1 = [6,8,9]
console.log(sortFactors(arr1))