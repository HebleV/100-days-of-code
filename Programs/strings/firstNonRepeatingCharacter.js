function noRepeat(str){
    for(let i = 0;i<str.length;i++){
        if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
            return str.charAt(i);
        }
    }
}
let str = 'aabbccdeeff';
console.log(noRepeat(str));