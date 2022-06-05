function find(str){
    let x = [];
    for(let char of str.split(' ')) {
        x.push(char.length);
        console.log({x});
    }
    return Math.max(...x);
    
}

console.log(find('hi owl hello'));