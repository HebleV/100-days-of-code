function largestArr(arr) {
    let newArr = [];
    for(let num of arr){
        newArr.push(Math.max(...num));
        console.log({newArr});
    }
    return newArr;
}
largestArr(([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//This will return highest num from every sub array