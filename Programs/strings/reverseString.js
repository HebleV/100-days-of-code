function reverseString(str){
    let newStr = str.split(' ');
    let result = '';
    for(let i = newStr.length-1; i>=0; i--){
        result = `${result} ${newStr[i]}`;
    }
    return result.trim();
}

console.log(reverseString('the sky is blue'));
