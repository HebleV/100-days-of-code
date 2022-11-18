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

// function anagrams(strA,strB) {
//     return helperFunc(strA) === helperFunc(strB);
// }

// function helperFunc(str) {
//     let convertedStr = str.replace(/[^\w]/g, '')
//                           .toLowerCase()
//                           .split('')
//                           .sort()
//                           .join('');
//     return convertedStr;
// }
// console.log(helperFunc('helloaa'));
// console.log(anagrams('rail safety','fairy tales'));

function isAnagram(str1, str2) {
  let objStr1 = {};
  let objStr2 = {};

  for (let char of str1) {
		objStr1[char] = objStr1[char] + 1 || 1;
		console.log("char:",objStr1[char])
  }
  for (let char of str2) {
    objStr2[char] = objStr2[char] + 1 || 1;
  }

  if (Object.keys(objStr1).length !== Object.keys(objStr2).length) {
    return false;
  }
  for (let char in objStr1) {
    if (objStr1[char] !== objStr2[char]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("hello", "olleh"));
// console.log(isAnagram("rail sam", "sail rams"));
