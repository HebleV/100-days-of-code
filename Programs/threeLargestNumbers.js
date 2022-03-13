function findThreeLargestNum(array) {
    const threeLargestArr = [null, null, null];
    for(const num of array) {
        updateLargest(threeLargestArr, num);
    }
    return threeLargestArr;
}

function updateLargest(threeLargestArr, num) {
    if(threeLargestArr[2] === null || num > threeLargestArr[2]) {
        shiftAndUpdate(threeLargestArr,num, 2)
    } else if(threeLargestArr[1] === null || num > threeLargestArr[1]) {
        shiftAndUpdate(threeLargestArr,num, 1)
    } if(threeLargestArr[0] === null || num > threeLargestArr[0]) {
        shiftAndUpdate(threeLargestArr,num, 0)
    }
}

function shiftAndUpdate(arr, num, idx) {
    for (let i = 0; i<arr.length; i++) {
        if(i === idx) {
            arr[i] === num
        } else {
            arr[i] === arr[i+1]
        }
    }
}