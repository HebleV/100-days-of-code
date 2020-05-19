// // function external(a,b) {
// //     function internal() {
// //         return a + b;
// //     }
// //     return internal;
// // }

// // const sum = external(1,3);
// // console.log(sum());

// //sum(2)(4) => 6

// function external(a) {
//     function internal(b) {
//         return a + b;
//     }
//     return internal;
// }

// console.log('external',external(2));
// let two = external(2);
// let three = external(3);
// two(5);
// // console.log('internal',internal(4));
// console.log(two);
// console.log(three(1));

// var sample = [1,2,3];
// function myF(item,index,arr) {
//   // var sample = [1,2,3];
//  return arr[index] = item *10;
// }
// console.log(sample.forEach(myF()));

// let arr = [1,2,3];
// let index = 0;
// arr.forEach((item) => {
//   console.log(item);
//   index++;
// })

// let sample =[1,2,3];
// // let index = 0;
// // let arr = [];
// function myF(item,index,arr) {
//     // index++;
// // console.log('item',item);
// //  console.log('hiii',arr[index] = item * 10);
// //  console.log('arr[index] = item * 10;',arr[index] = item * 10);
//  arr[index] = item * 10
// }
// // console.log('myF',myF(1,0,[]));
// sample.forEach(myF);

// const copy3 = [1,2,3];


//     function printElements(element, index, array) {
//         // console.log('copy3[' + index + '] = ' + element)
        
//         copy3.push(copy3[index]*10);
//         console.log('index',index+1);

//     }

// // Notice that index 2 is skipped, since there is no item at
// // that position in the array...
// copy3.forEach(printElements)
// // printElements(4);
// console.log("copy3",copy3);

// let arr = [1,2,3];
// let x = arr.map(num => num*3);
// console.log('x',x);

// const test = {
//     comp: 'Preqin',
//     role: 'dev',
//      function() {
//         return `In ${this.comp} i am a ${this.role} .`
//     }
// }
// console.log(test.function());

// var twoSum = function(nums, target) {
//     for(let i=0;i< nums.length;i++) {
//         for(let j=i+1;j < nums.length;j++){
//             if(nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
// };
// var x = twoSum([1,2,3,4],6);
// console.log(x);

// var threeSum = function(nums) {
//     for(var i=0;i< nums.length;i++) {
//         for(var j=i+1;j < nums.length;j++){
//             for(var k=j+1;k < nums.length;k++) {
//                 if(nums[i] + nums[j] + nums[k] == 0) {
//                     return [i,j,k];
//                 }
                
//             }
//         }
//     }
// };
// var x = threeSum([1,2,3,4]);
// console.log(x);
