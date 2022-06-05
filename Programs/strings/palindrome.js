// function palindrome(str) {
//     let rev = str.split('').reverse().join('');
//     return str === rev;
// }

// function palindrome(str) {
//     let rev = str.split('');
//     let pal = '';
//     return rev.every((char,i) => {
//         return char === str[str.length-i-1];
//     })
// }

function palindrome(str) {
    let rev = '';
    for (let char of str) {
         rev = char + rev;
    }
    return rev === str;
}
var x = palindrome('abbal');
console.log(x);