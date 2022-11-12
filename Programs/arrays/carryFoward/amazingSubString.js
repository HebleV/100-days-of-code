function amazingSubString(str){
    let count = 0;
    let vowelArray = ['a', 'e', "i", 'o', "u", 'A', 'E', "I", "O", "U"]
    for(let i = 0; i<str.length; i++){
        if(vowelArray.includes(str[i])){
            count = count + str.length - i;
        }
    }
    return count;
}

console.log(amazingSubString('ABEC'));