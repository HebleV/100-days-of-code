// Time => O(nLogn) and space => O(n)
// function sortedSquaredArray(array) {
//    return array.map(num => num * num).sort((a,b) => a - b);
// }

// Time => O(n) and space => O(n)
function sortedSquaredArray(array){
    // const sortedArr = new Array(array.length).fill(0);
    const sortedArr = []
    let smallIndex = 0;
    let largerIndex = array.length - 1;
    for(let i = array.length - 1; i >= 0; i--){
        const smallVal = array[smallIndex];
        const largeVal = array[largerIndex];
        if(Math.abs(smallVal) > Math.abs(largeVal))  {
            sortedArr[i] = smallVal * smallVal;
            smallIndex++;
        } else {
            sortedArr[i] = largeVal * largeVal;
            largerIndex--;
        }
    }
    return sortedArr;
}

console.log(sortedSquaredArray([-4,1,3,4]))