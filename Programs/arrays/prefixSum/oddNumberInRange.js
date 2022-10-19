function oddNumberInRange(arr, queries) {
    let oddArr = [];
    let prefixArr = [];
    if (arr[0] % 2 != 0) {
      prefixArr[0] = 1;
    } else {
      prefixArr[0] = 0;
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        prefixArr[i] = prefixArr[i - 1] + 1;
      } else {
        prefixArr[i] = prefixArr[i - 1];
      }
    }
    console.log("prefixArr", prefixArr);
    for (let j = 0; j < queries.length; j++) {
      oddArr[j] = prefixArr[queries[j][1]] - prefixArr[queries[j][0]];
    //Adding this if condition to handle the edge case as it will reduce count by 1 coz of above condition
      if (arr[queries[j][0]] % 2 != 0){
          oddArr[j] = oddArr[j] + 1;
      } 
    }
    return oddArr;
  }

console.log(
    oddNumberInRange(
      [1,2,3,4,5],
      [
        [0,2],
        [1,4],
      ]
    )
  );