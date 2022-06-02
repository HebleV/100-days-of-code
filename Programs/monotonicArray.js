function monotonicArray(array) {
    let isNonDecreasing = true;
    let isNonIncreasing = true;
    for(let i = 0; i < array.length; i++){
        if(array[i] < array[i-1]) isNonDecreasing = false;
        if(array[i] > array[i-1]) isNonIncreasing = false;
    }
return isNonDecreasing || isNonIncreasing;
}

console.log(monotonicArray([-1,-5,-10,-15,-2000]))