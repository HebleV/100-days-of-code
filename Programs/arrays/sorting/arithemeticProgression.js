// Given an integer array A of size N. Return 1 if the array can be 
// arranged to form an arithmetic progression, otherwise return 0.

// A sequence of numbers is called an arithmetic progression 
// if the difference between any two consecutive elements is the same.
function arithemeticProgression(arr){
    arr.sort((a,b) => a-b);
    console.log("arr",arr)
    let diff = arr[1]-arr[0];
    for(let i = 0; i<arr.length-1; i++){
        console.log("val",arr[i])
        console.log(arr[i+1]-arr[i])
        if(arr[i+1]-arr[i] != diff){
            return 0;
        }
    }
    return 1;
}

console.log(arithemeticProgression([3,5,1,7]))