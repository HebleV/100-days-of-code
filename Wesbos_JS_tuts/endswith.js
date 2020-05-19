// function endswith(str,last) {
//         if(str[str.length-1] === last) {
//             return true;
//         } else {
//             return false;
//         }
// }


//This covers all the corner cases including multiwords
function endswith(str,last) {
    return str.slice(str.length - last.length) === last;
}
console.log(endswith('bastianbn nn hi', 'i'));