// Bruteforce - O(N^2)
function sellStocks(arr){
    let profit;
    let maxProfit = 0;
    for(let i = 0; i<arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[j]> arr[i]){
                profit = arr[j] - arr[i];
                maxProfit = Math.max(profit,maxProfit);
            }
        }
    }
    return maxProfit;
}

//O(N)
// function sellStocks(prices){
//     if(prices.length == 0) return 0;
//     let max = 0;
//     let min = prices[0];
//     for(let i=1;i<prices.length;i++) {
//         min = Math.min(prices[i], min)
//         max = Math.max(max, prices[i]-min)
//     }
//     return max;
// }

const arr1 = [1, 4, 5, 2, 4];
console.log(sellStocks(arr1));