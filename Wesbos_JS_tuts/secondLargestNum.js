function Largest(arr) {
    let firstHighest = arr.reduce(function(a,b) {
        return Math.max(a,b);
    });

    let newArr = arr.filter(item => item != firstHighest);
    
    let secondHighest = newArr.reduce(function(a,b) {
        return Math.max(a,b);
    });
    console.log(secondHighest);
    
}

Largest([1,3,5,7,9,11]);