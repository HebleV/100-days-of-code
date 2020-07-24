function maskify(cc){
    return cc.split('').map((char, idx) => idx < cc.length - 4 ? '#' : char ).join('');
}
console.log(maskify('1234567812345678'));