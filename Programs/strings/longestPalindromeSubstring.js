// Brute force
// O(N^3) && SC(1)
// function longestPalindromeSubstring(str){

//     function palindrome(str,left,right){
//             if(str.charAt(left) == str.charAt(right)){
//                 return true;
//             } else {
//                 return false;
//             }
//     }

//     let maxLen = Number.NEGATIVE_INFINITY;
//     let start = 0;
//     let end = 0;
//     for(start = 0; start<str.length; start++){
//         for(end = start; end<str.length; end++){
//             // console.log(start, end)
//             if(palindrome(str,start,end)){
//                 maxLen = Math.max(maxLen, end - start + 1);
//             }
//         }
//     }
//     return maxLen
// }

// Using 2 pointer method
//This will return the max length
// function longestPalindromeSubstring(str) {
//   function expand(str, p1, p2) {
//     while (p1 >= 0 && p2 < str.length && str[p1] == str[p2]) {
//       p1--;
//       p2++;
//     }
//     return p2 - p1 - 1;
//   }
//   let maxLen = Number.NEGATIVE_INFINITY;
//   let p1;
//   let p2;

//   for (let mid = 0; mid < str.length; mid++) {
//     p1 = mid;
//     p2 = mid;
//     let expandedLen = expand(str, p1, p2);
//     maxLen = Math.max(expandedLen, maxLen);
//   }

//   for (let mid = 0; mid < str.length; mid++) {
//     p1 = mid;
//     p2 = mid + 1;
//     let expandedLen = expand(str, p1, p2);
//     maxLen = Math.max(expandedLen, maxLen);
//   }
//   return maxLen;
// }

// Using 2 pointer method
//This will return the longest palindromic substr itself
function longestPalindromeSubstring(str) {
  function expand(str, p1, p2) {
    while (p1 >= 0 && p2 < str.length && str[p1] == str[p2]) {
      p1--;
      p2++;
    }
    return str.slice(p1 + 1, p2);
  }

  let p1;
  let p2;
  let ans = "";

  //For Odd
  for (let mid = 0; mid < str.length; mid++) {
    p1 = mid;
    p2 = mid;
    let expandedStr = expand(str, p1, p2);
    if (expandedStr.length > ans.length) {
      ans = expandedStr;
    }
  }

  //For even => So consider all adjacent elements as mid
  for (let mid = 0; mid < str.length; mid++) {
    p1 = mid;
    p2 = mid + 1;
    let expandedStr = expand(str, p1, p2);
    if (expandedStr.length > ans.length) {
      ans = expandedStr;
    }
    return ans;
  }
}

const str = "abacab";
const str1 = "abdkdba";
const str2 = "aba";
console.log(longestPalindromeSubstring(str));
