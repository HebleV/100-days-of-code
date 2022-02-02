function repeatstring(str,num){
    let newArr=[];
    for (let i =0;i<num;i++) {
        newArr.push(str);
    }
    return newArr.join('');
}

repeatstring('abc',4);