// Time => O(n) and Space => O(1)
// function subsequence(array, sequence){
//     let arrIdx = 0;
//     let seqIdx = 0;
//     while(arrIdx < array.length && seqIdx < sequence.length) {
//         if(array[arrIdx] === sequence[seqIdx]) {
//             seqIdx++;
//         }
//         arrIdx++; //Irrespective of what we keep incrementing the arrIdx
//     }
//     return seqIdx === sequence.length;
// }

function subsequence(array, sequence) {
    let seqIdx = 0;
    for(const value of array) {
        if(seqIdx === sequence.length){
            break;
        }
        if(sequence[seqIdx] === value) {
            seqIdx++;
        }
    }
    return seqIdx === sequence.length;
}

console.log(subsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10]))