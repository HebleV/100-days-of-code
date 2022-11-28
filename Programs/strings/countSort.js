// O(N) && SC(N)
function countSort(arr) {
  // return arr.sort((a,b) => a-b)
  let freqIndex = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, Number(arr[i]));
  }
  const freqArr = new Array(max + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    freqArr[arr[i]]++;
  }
  let k = 0;
  for(let i = 0; i<freqArr.length; i++){
    console.log("x",arr[k], i)
      for(let j = 0; j<freqArr[i]; j++){
          arr[k] = i;
          k++;
      }
  }
  return arr;
}

console.log(countSort([1, 3, 2, 1, 2]));
