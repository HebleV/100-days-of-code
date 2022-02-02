function pyramid(n){
    let midPoint = Math.floor((2 * n - 1)/2);
    for(let row = 0; row < n; row++) {
        let str = '';
        for(let col = 0; col < 2 * n - 1; col++) {
            if(midPoint - row <= col && midPoint + row >= col) {
                str = str + '*';
            } else {
                str = str + ' ';
            }
        }
        console.log(str);
    }
}
pyramid(4);