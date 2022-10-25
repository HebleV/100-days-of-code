//Using moore's voting algo
// O(N) SC=O(1)
function majorityElement(A) {
  let majorityElement = A[0];
  let count = 1;
  let n = A.length;
  for (let i = 1; i < n; i++) {
    if (count == 0) {
      count++;
      majorityElement = A[i];
    } else if (majorityElement == A[i]) {
      count++;
    } else {
      count--;
    }
  }
  return Number(majorityElement);
}

console.log(majorityElement([2,1,2]))