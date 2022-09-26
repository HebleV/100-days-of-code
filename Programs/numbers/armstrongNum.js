//1. Find if a num is armstrong num
//2. Find all the armstrong num in the range 1 - n where n is a passed param into function

// function armstrongNum(n) {
//   let arm = 0;
//   let a;
//   let temp = n;
//   while (temp > 0) {
//     a = temp % 10;
//     console.log("a",a)
//     temp = parseInt(temp / 10); // convert float into Integer
//     console.log("temp",temp)
//     arm = arm + a * a * a;
//     console.log("arm",arm);
//   }
//   if (arm == n) {
//     console.log("Armstrong number");
//   } else {
//     console.log("Not Armstrong number");
//   }

//   function isArmstrong(num) {
//     let result = 0;
//     let lastNum;
//     let temp = num;
//     while (temp > 0) {
//       lastNum = temp % 10;
//       temp = parseInt(temp / 10);
//       result = result + lastNum * lastNum * lastNum;
//     }
//     return result === num;
//   }
// // }
// function findArmArr(A){
//     let arr = [];
//   for (let i = 1; i < A; i++) {
//     if (isArmstrong(i)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

function findArm(A) {
  const arr = [];
  for (let i = 1; i <= A; i++) {
    let temp = i;
    let result = 0;
    let lastNum;
    while (temp > 0) {
      lastNum = temp % 10; // remainder
      temp = parseInt(temp / 10); //quotient
      result = result + lastNum * lastNum * lastNum;
    }
    if (result === i) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(findArm(200));
