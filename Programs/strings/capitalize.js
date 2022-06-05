function capitalize(str) {
    let arr =[];
    let convertedStr = str.split(' ');
    for(let char of convertedStr) {
        arr.push(char[0].toUpperCase() + char.slice(1));
    }
return arr.join(' ');
}

console.log(capitalize('a lazy fox'));