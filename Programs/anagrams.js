// function anagrams(strA,strB) {
//     let convertStrA = helperFunc(strA);
//     let convertStrB = helperFunc(strB);
//     if(Object.keys(convertStrA).length !== Object.keys(convertStrB).length) {
//         return false;
//     }
//     for (let char in convertStrA) {
//         if(convertStrA[char] !== convertStrB[char]) {
//             return false;
//         }
//     }
//     return true;
// }

//Build helper function to build characters objects with mapped to its occurences like in maxChar
// function helperFunc(str) {
//     let objStr = {};
//     let convertedStr = str.replace(/[^\w]/g, '').toLowerCase();
//     for(let char of convertedStr) {
//         if(objStr[char]) {
//             objStr[char]++;
//         } else {
//             objStr[char] =1;
//         }
//     }
//     return objStr;
// }

function anagrams(strA,strB) {
    return helperFunc(strA) === helperFunc(strB);
}

function helperFunc(str) {
    let convertedStr = str.replace(/[^\w]/g, '')
                          .toLowerCase()
                          .split('')
                          .sort()
                          .join('');
    return convertedStr;
}
console.log(helperFunc('helloaa'));
console.log(anagrams('rail safety','fairy tales'));
