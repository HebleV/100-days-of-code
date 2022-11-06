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

// function palindrome(str) {
//     let rev = '';
//     for (let char of str) {
//          rev = char + rev;
//     }
//     return rev === str;
// }

function palindrome(str){
    let left = 0;
    let right = str.length-1;;
    while(left<=right){
        if(str.charAt(left) == str.charAt(right)){
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(palindrome('nitin'));