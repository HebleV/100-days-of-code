// function reverse(str) {
//     let reversed = '';
//     for (let char of str) {
//         reversed = char + reversed;
//         console.log({char,str,reversed});
//     }
//     return reversed;
// }


function reverse(str) {
    let reversed = str.split('').reverse().join('');
    return reversed.split(' ').reverse().join(' ');
}

// function reverse(str) {
//     let reversed = str.split('');
//     console.log(reversed);
//     return reversed.reduce((acc,val) => {
//         console.log({acc,val});
//          return val + acc;
//     },'');
// }
let x = reverse('hello');
console.log(reverse('hello world guys'));