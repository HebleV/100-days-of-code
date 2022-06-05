// Add elements of array and if there is a nested array then increase multiplier by 1 and multiply the sum by multiplier (depth) 
// O(n) and O(d) where is depth of array
function productSum(arr,multiplier = 1) {
    let sum = 0;
    for(const ele of arr) {
        if(Array.isArray(ele)){
            sum = sum + productSum(ele, multiplier + 1)
        } else {
            sum = sum + ele;
        }
    }
    return sum * multiplier;
}

array = [5,2,[7,-1],3,[6,[-13,8],4]]

console.log(productSum(array))