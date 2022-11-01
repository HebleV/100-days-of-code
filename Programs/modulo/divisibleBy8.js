// You are given a number A in the form of a string.
// Check if the number is divisible by eight or not.

// Return 1 if it is divisible by eight else, return 0.
//Divisibility rule of 8 says that if last 3 digits are dib=visible by 8 then it is a multiple of 8
function divisibleBy8(strNum) {
  let lastThreeDigit;
  if (strNum.length > 3) {
    lastThreeDigit = Number(strNum.substring(strNum.length - 3));
    return lastThreeDigit % 8 == 0 ? 1 : 0;
  } else {
    return strNum % 8 == 0 ? 1 : 0;
  }
}
console.log(divisibleBy8("8832"));
