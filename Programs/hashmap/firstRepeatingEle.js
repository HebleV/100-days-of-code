function firstRepeatingEle(arr) {
  let set = new Set();
  let repeatEle = -1;
  for(let j = arr.length-1; j>=0; j--){
      if(set.has(arr[j])){
        repeatEle = arr[j];
      } else {
          set.add(arr[j]);
      }
  }
  return repeatEle
}
const arr1 = [10, 5, 3, 4, 3, 5, 6];
const arr2 = [ 6, 10, 5, 4, 9, 120 ];
console.log(firstRepeatingEle(arr2));
