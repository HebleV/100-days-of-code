function countCharacters(str) {
    const countObj = {};
    for(let char of str){
        countObj[char] = countObj[char] + 1 || 1; 
    }
    return countObj;
}
console.log(countCharacters('aabcddeee'));