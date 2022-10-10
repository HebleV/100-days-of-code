function printSubArray(arr,s){
    for(let i = s; i < arr.length; i++){
        let p = '';
        for(let j = i; j <arr.length; j++){
            for(let k =i;k < j; k++){
                p = p + arr[i];
                console.log("arr[i]", p)
            }
        }
    }
}

console.log(printSubArray([1,2,3,4,5,6],2))