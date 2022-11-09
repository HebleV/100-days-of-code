//Given an integer array A of size N. You can remove any element from the array in one operation.
// The cost of this operation is the sum of all elements in the array present before this operation.
// Find the minimum cost to remove all elements from the array.
//O(Nlogn) coz the inbuilt sort function is nlogn. so nlogn + n => nlogn.
function elementsRemoval(arr){
    let sum = 0;
    arr.sort((a,b) => b-a);
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i]*(i+1);
    }
    return sum;
}

console.log(elementsRemoval([3,1,0,2]))