// function alternateNegativePositiveNumbers(arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     while(i < j) {
//         if(i < j && arr[i] < 0) {
//             i++;
//         }
//         if(arr[i] < 0 && arr[j] > 0){
//             [arr[i], arr[j]] = [arr[j],arr[i]]
//             i++;
//             j--;
//         } 
//     }
//     return arr
// }

function alternateNegativePositiveNumbers(arr) {
    const positiveArr = [];
    const negativeArr = [];
    const alternateArr = [];
    let pos = positiveArr.length;
    let neg = negativeArr.length;
    for(let i = 0; i < arr.length; i++) {
            if(arr[i] >= 0){
                positiveArr.push(arr[i])
            } else {
                negativeArr.push(arr[i])
            }
    }
    // for(let i = 0; i < postiveArr.length; i++){
    //     alternateArr.push(postiveArr[i])
    //     for(let j = 0; j < negativeArr.length; j++){
    //         if(alternateArr[i] > 0 && alternateArr[j] < 0){
    //             alternateArr.push(negativeArr[j])
    //         }
    //     }
    // }
    while(pos < neg || pos > neg) {
        console.log("x",typeof arr[pos])
        if(typeof arr[pos] !== undefined){
        alternateArr.push(positiveArr[pos])
        }
        if(typeof arr[neg] !== undefined){
        alternateArr.push(negativeArr[neg])
        }
        pos+=1;
        neg+=1;
        console.log("alternateArr",alternateArr)
    }
    return alternateArr;
}

console.log(alternateNegativePositiveNumbers([1,2,3,-4,-1,4]))