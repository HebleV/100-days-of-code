function evenIndicesSum(arr, range) {
const resultArr = [];
  const pf_even = [];
  pf_even[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 0) {
      pf_even[i] = pf_even[i - 1] + arr[i];
    } else {
      pf_even[i] = pf_even[i - 1];
    }
  }

  for(let j = 0; j<range.length; j++){
      if(range[j][0] !== 0){
        resultArr[j] = pf_even[range[j][1]] - pf_even[range[j][0]-1];
      } else {
          console.log(j)
        resultArr[j] = pf_even[range[j][1]]
      }
  }
  return resultArr;
}

const arr = [ 16, 3, 3, 6, 7, 8, 17, 13, 7 ];
const range = [
    [2, 6],
    [4, 7],
    [6, 7],
  ];
console.log(evenIndicesSum(arr, range));
