// function vowelCounter(str){
//     let counter = 0;
//     let vowels = 'aeiou';
//     for(let char of str.toLowerCase()) {
//         if(vowels.includes(char)) {
//             counter++;
//         }
//     }
//     return counter;
// }


function vowelCounter(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(vowelCounter('hi there'));