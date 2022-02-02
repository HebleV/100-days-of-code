// function flatArr(arr){
//    return arr.flat();
// }

let newArr = [];
function flatArr(arr) {
    newArr = arr.reduce((prev, curr) => {
        return prev.concat(curr);
    }, [])
}
flatArr([1, [2, 3]]);
console.log(newArr);