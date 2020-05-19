// function reverseInt(num) {
//     let str = num.toString();
//     if(num < 0) {
//         return parseInt(str.split('').reverse().join('')) * -1;
//     }
//    return parseInt(str.split('').reverse().join(''));
// }

function reverseInt(num) {
    let str = num.toString();
   return parseInt(str
                    .split('')
                    .reverse()
                    .join('')
                    ) * Math.sign(num);
}

let x = reverseInt(-123);
let y = reverseInt(456);
let z = reverseInt(100);
console.log({x,y,z});