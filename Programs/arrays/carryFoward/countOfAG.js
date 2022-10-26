//bruteforce approach => O(N^2)
// function countOfAG(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str.charAt(i) == 'A'){
//             for(let j = i+1; j<str.length;j++){
//                 if(str.charAt(j) == 'G') {
//                     count++;
//                 }
//             }
//         }
//     }
//     return count;
// }


// //carryforward sum => O(N)
// function countOfAG(str){
//     let ans = 0;
//     let gcount = 0;
//     for(let i = str.length-1;i>=0;i--){
//         console.log("xxx",str.charAt(i));
//         if(str.charAt(i) == 'G'){
//             gcount++;
//         } else if(str.charAt(i) == 'A'){
//             ans = ans + gcount;
//         }
//     }
//     return ans;
// }

//O(N)
function countOfAG(str){
    let acount = 0;
    let ans = 0;
    for(let i = 0; i<str.length; i++){
        if(str.charAt(i) == 'A'){
            acount++;
        } else if(str.charAt(i) == 'G'){
            ans = ans + acount;
        }
    }
    return ans;
}


//O(N)
// function countOfAG(str){
//     let ans = 0;
//     let gcount = 0;
//     for(let i = str.length-1;i>=0;i--){
//         if(str.charAt(i) == 'A'){
//             ans = ans + gcount;
//         } else if(str.charAt(i) == 'G'){
//             gcount++;
//         }
//     }
//     return ans;
// }

//For huge input of str
// function countOfAG(str){
//     const modulo = Number(Math.pow(10,9) + 7);
//         let ans = Number(0);
//         let gcount = Number(0);
//         for(let i = str.length-1;i>=0;i--){
//             if(str.charAt(i) == 'G'){
//                 gcount++;
//                 gcount = gcount % modulo;
//             } else if(str.charAt(i) == 'A'){
//                 ans = ans + gcount;
//                 ans = ans % modulo;
//         }
//     }
//     return Number(ans % modulo);
// }

console.log(countOfAG("ABCGAG"))