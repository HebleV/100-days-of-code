//Dvisibility rule for 3 is that if you add up every num and if the num is divisible by 3 then it is a multiple of 3.
function divisibleBy3(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        // sum = sum + arr[i];
        // Again using %3 here on every individual num to avoid overflow.
        sum = sum + arr[i]%3;
        console.log(sum)
    }
    return sum % 3 === 0 ? 1 : 0
}
console.log(divisibleBy3([1,2,5]))