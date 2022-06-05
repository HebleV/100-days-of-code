// Make a longest distinct string from 2 given strings
function distinct(str1, str2) {
    return [... new Set((str1 + str2).split(''))].sort().join('');
}

let str1 = 'xyzaabbbccde';
let str2 = 'xxzzabcde';
console.log(distinct('xyzaabbbccde','xxzzabcde'));