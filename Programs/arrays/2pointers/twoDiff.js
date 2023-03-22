// // For unique elements only
// function twoDiff(arr, k) {
//     let count = 0;
//     arr.sort((a, b) => a - b);

//     let uniqueElements = Array.from(new Set(arr));
//     let i = 0;
//     let j = 1;
// // console.log(newSet)
//     while (j < uniqueElements.length) {
//         let diff = uniqueElements[j] - uniqueElements[i];

//         if (diff < k) {
//             j++;
//         } else if (diff > k) {
//             i++;
//         } else {
//             count++;
//             i++;
//             j++;
//         }
//     }

//     return count;
// }

// const arr2 = [8, 5, 1, 10, 5, 9, 9, 3, 5, 6, 6, 2, 8, 2, 2, 6, 3, 8, 7, 2, 5, 3, 4, 3, 3, 2, 7, 9, 6, 8, 7, 2, 9, 10, 3, 8, 10, 6, 5, 4, 2, 3];

// console.log(twoDiff(arr2, 3));


// For non unique elements and unique too
function twoDiff(arr, k) {
    let count = 0;
    arr.sort((a, b) => a - b);

    let elementCountMap = new Map();
    for (let elem of arr) {
        elementCountMap.set(elem, (elementCountMap.get(elem) || 0) + 1);
    }

    for (const [key, value] of elementCountMap.entries()) {
        if (k === 0 && value > 1) {
            count += 1;
        } else if (k > 0 && elementCountMap.has(key + k)) {
            count += 1;
        }
    }

    return count;
}

const arr2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log(twoDiff(arr2, 0)); // Output: 1

