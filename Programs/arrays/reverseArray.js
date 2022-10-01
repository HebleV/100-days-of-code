// const reverseArray = array => {
//     for (let i = 0; i < array.length / 2; i++) {
//         const temp = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = temp;
//     }
//     return array;
// };

const reverseArray = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    while(i <= j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4]));