function specialIndex(arr) {
  let count = 0;
  let evenIndexSum;
  let oddIndexSum;
  const pf_even = [];
  const pf_odd = [];
  pf_even[0] = arr[0];

  // for odd first value should be zero => Very imp
  pf_odd[0] = 0;

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 == 0) {
      pf_even[i] = pf_even[i - 1] + arr[i];
    } else {
      pf_even[i] = pf_even[i - 1];
    }
  }

  for (let i = 1; i < arr.length; i++) {
    if (i % 2 != 0) {
      pf_odd[i] = pf_odd[i - 1] + arr[i];
    } else {
      pf_odd[i] = pf_odd[i - 1];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      evenIndexSum = pf_even[i - 1] + pf_odd[arr.length - 1] - pf_odd[i];
    } else {
      // Edge case => This would be run only when i == 0 i.e. only on first case
      evenIndexSum = pf_odd[arr.length - 1] - pf_odd[i];
    }
    if (i == 0) {
      // Edge case => This would also run only once
      oddIndexSum = pf_even[arr.length - 1] - pf_even[i];
    } else {
      oddIndexSum = pf_odd[i - 1] + pf_even[arr.length - 1] - pf_even[i];
    }
    // console.log(i, evenIndexSum, oddIndexSum);
    if (evenIndexSum == oddIndexSum) {
      count++;
    }
  }
  console.log(pf_even, pf_odd);
  return count;
}

const arr = [2, 1, 6, 4];

console.log(specialIndex(arr));
