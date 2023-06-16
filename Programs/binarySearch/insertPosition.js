function insertPosition(arr, k){
    let l = 0;
    let r = arr.length-1;
    let mid;
    if(k <= arr[0]) return 0;
    if(k >= arr[arr.length-1]) return arr.length;
    else if(k === arr[arr.length-1]) return arr.length-1;

    while(l<=r){
        mid=Math.floor((l+r)/2);
        console.log("mid 1", mid)
        if(arr[mid] === k){
        console.log("mid 2", mid)
            return mid;
        } else if(k>arr[mid] && k<arr[mid+1]){
            return mid+1;
        } else if(k>arr[mid-1] && k<arr[mid+1]){
            return mid;
        } else if(arr[mid] < k){
            l = mid+1;
        } else if(arr[mid] > k){
            r = mid-1;
        } 
    }
}

const arr1 = [1, 3, 5, 6,];
console.log(insertPosition(arr1,7));