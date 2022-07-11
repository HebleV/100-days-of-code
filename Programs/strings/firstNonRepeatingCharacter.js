// function noRepeat(str){
//     for(let i = 0;i<str.length;i++){
//         if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
//             return str.charAt(i);
//         }
//     }
// }

function noRepeat(str){
    const countChar = {};
    for(let char of str){
        countChar[char] = countChar[char] + 1 || 1;
    }
    for(let char in countChar){
        if(countChar[char] === 1){
            return char
        } 
    }
    return -1;
}
let str = 'aabbccdeeff';
console.log(noRepeat(str));