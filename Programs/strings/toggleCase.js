function toggleCase(str){
    let strNew = str.split('');
    for(let i = 0; i<strNew.length; i++){
        // console.log(str.charAt(i), `=>`, String.fromCharCode(str.charAt(i).charCodeAt(0) - 32))
        if(strNew[i] >= 'a' && strNew[i] <= 'z'){
            strNew[i] = String.fromCharCode(strNew[i].charCodeAt(0) - 32);
            console.log("str",str)
        } else {
            strNew[i] = String.fromCharCode(strNew[i].charCodeAt(0) + 32);
        }
    }
    return strNew.join('');
}

console.log(toggleCase("Hello"))