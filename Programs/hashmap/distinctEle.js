function distinctEle(arr){
    let set = new Set();
    for(let i = 0; i<arr.length; i++){
        set.add(arr[i]);
    }
    return set.size
    // return new Set(arr).size
}

const arr1 = [3, 4, 3, 6, 6]
console.log(distinctEle(arr1))