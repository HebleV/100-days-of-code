function lowHigh(arr){
     arr.sort((a,b)=>{
        return a - b;
    })
    return `The num are ${arr[0]} and ${arr[arr.length-1]}`;
}
console.log(lowHigh([3,41,5,6]));
