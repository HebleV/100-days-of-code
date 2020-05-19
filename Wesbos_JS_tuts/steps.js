// function steps(n){
//     for(let row=0;row<n;row++){
//         let stair = '';
//         for(let column=0;column<n;column++) {
//             if(row<=column){
//                 stair = stair + '*';
//             } else {
//                 return ' ';
//             }
//             console.log(stair);
//         }  
//     }
// }


function steps(n) {
    for (let row = 0; row < n; row++) {
        let str = '';
        console.log('1',str);
        for (let col = 0; col < n; col++) {
            (col<=row) ? str += '*' : 'x';
            console.log('2',str);
        }
        console.log('3',str);
    }
}

steps(3);