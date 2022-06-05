function occurence(arr) {
   let sortedArr = arr.sort(function(a,b) { return a-b; });
   let max = {};  
   let newArr = [];
    for (let char of sortedArr) {
        max[char] = max[char] + 1 || 1;
    }

    for (let char in max) {
        for(let i=0;i<max[char];i++) {
            newArr.push(char);
        }
    }
    return newArr;
}

console.log(occurence([4,3,1,6,4,3,6,4]));



// function repeatstring(str,num){
//     let newArr=[];
//     for (let i =0;i<num;i++) {
//         newArr.push(str);
//     }
//     return newArr.join('');
// }

// repeatstring('abc',4);