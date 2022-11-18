//Using count sort algorithm
//O(N) && SC(N)
function sortString(str){
    const frequencyArr = new Array(26).fill(0);
    let frequencyIndex;
    let strArr = str.split('');
    for(let i = 0; i<strArr.length; i++){
        // a.charCodeAt(0) - 97 = 97-97 => 0 and increase count by 1 on every occurence
        frequencyIndex = strArr[i].charCodeAt(0) - 97;
        frequencyArr[frequencyIndex] += 1;
    }
    let indexToFill = 0;
    for(let i = 'a'.charCodeAt(0); i<='z'.charCodeAt(0); i++){
        let index = i - 'a'.charCodeAt(0);
        for(let j = 0; j<frequencyArr[index]; j++){
            strArr[indexToFill] = String.fromCharCode(i);
            indexToFill++;
        }
    }
    return strArr.join('')
}

console.log(sortString('abdacbdea'));