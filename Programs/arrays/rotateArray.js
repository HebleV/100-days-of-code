//Rotate array by n times
function rotateArray(arr,n){
    let k = n % arr.length;
        swap(arr,0,arr.length - 1);
        swap(arr,0,k-1);
        swap(arr,k,arr.length - 1);
    return arr;
}
function swap(arr,i,j){
        while(i <= j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    } 
     
console.log(rotateArray([1,2,3,4],6))