//Find peak
//Find next largest num
//Flip the above num
//Reverse everything on right side of peak
function nextPermutation(arr) {
    let peak;
    for(let i = arr.length; i>=0; i--) {
        if(i === 0) {
            peak = 0;
        }
        if(arr[i] > arr[i-1]){
            peak = i;
            console.log("peak",peak)
            break;
        }
    }

    for(let j = arr.length-1; j>=0; j--) {
        if(arr[j] > arr[peak - 1]) {
            console.log("inside j", arr[j], arr[peak-1])
            let temp = arr[j];
            arr[j] = arr[peak-1];
            arr[peak-1] = temp;
            break;
        }
    }

    let start = peak;
    let end = arr.length-1;
    while(start < end) {
        let temp = arr[start];
        arr[start] =arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

let arr = [3,2,1];

console.log(nextPermutation(arr));