function productArr(arr){
    let prod = [];
    for(let i=0;i<arr.length;i++){
        prod[i]=1;
        for(let j=0;j<arr.length;j++){
            if(i == j){
                continue;
            } else {
                prod[i]=prod[i]*arr[j];
            console.log("i,j,prod", i,j,prod[i])

            }
        }
    }
    return prod;
}
console.log(productArr([1,2,3,4,5]))