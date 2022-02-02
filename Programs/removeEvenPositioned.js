function removeEven(arr) {
    return arr.filter((_, index) => index % 2 === 0)
}

console.log(removeEven([1,2,3,4,5,6,7,8]))