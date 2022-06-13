//O(n) - time && O(1) - space
function longestPeak(array) {
    // Write your code here.
    let longestPeakLength = 0;
    let i = 1;
    while(i <= array.length - 1){
      let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
      if(!isPeak) {
        i++;
        continue;
      }
      let left = i - 2;
      while(i >= 0 && array[left] < array[left + 1]) {
        left--;
      }
      let right = i + 2;
      while(i <= array.length - 1 && array[right] < array[right - 1]) {
        right++;
      }
      let currentPeakLength = right - left - 1;
      longestPeakLength = Math.max(currentPeakLength, longestPeakLength);
      i = right;
    }
    return longestPeakLength;
  }
  
  // Do not edit the line below.
  exports.longestPeak = longestPeak;
  