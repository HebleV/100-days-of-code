// You have an array A with N elements. We have two types of operation available on this array :
// We can split an element B into two elements, C and D, such that B = C + D.
// We can merge two elements, P and Q, to one element, R, such that R = P ^ Q i.e., XOR of P and Q.
// You have to determine whether it is possible to convert array A to size 1, containing a single element equal to 0 after several splits and/or merge?

function interestingArr(A) {
  let returnVal = "No";
  let ans = 0;
  if (A.length > 1) {
    for (let i = 0; i < A.length; i++) {
      ans = ans ^ A[i];
    }
    let a = Math.round(ans / 2);
    let b = ans - a;
    ans = a ^ b;
  } else {
    ans = A[0];
  }

  if (ans == 0) {
    returnVal = "Yes";
  }

  return returnVal;
}

const A = [9, 17];

console.log(interestingArr(A))
