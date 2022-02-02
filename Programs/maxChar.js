// function maxChar(str) {
//     let max = {};
//     let occurences = 0;
//     let maxOccuredChar = '';
//     for(let char of str) {
//          if(max[char]) {
//              max[char]++;
//          } else {
//              max[char] = 1;
//          }
//     }
    
//     for(let char in max) {
//         console.log({char,max});
//         if(max[char] > occurences) {
//             occurences = max[char];
//             maxOccuredChar = char;
            
//         } 
//     }
//     return maxOccuredChar;
// }
// console.log(maxChar('hello'));



function maxChar(str) {
    let max = {};
    let occurences = 0;
    let maxOccuredChar = '';

    for (let char of str) {
        max[char] = max[char] + 1 || 1;
    }
    
    for (let char in max) {
        if(max[char] > occurences) {
            occurences = max[char];
            maxOccuredChar = char;
        }
    }
    return maxOccuredChar;
}
console.log(maxChar('helloooworld11111111'));