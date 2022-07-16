//-------------------------Example 1
// const arr = [1,2,3,4,5]
// const reducer = (acc,val) => acc + val;

// const sum = arr.reduce(reducer, 0);

// console.log(sum)

//---------------------------Example 2
// const votes = [
//     "react",
//     "react",
//     "angular",
//     "vue",
//     "angular",
//     "svelte",
//     "react",
//     "react",
//     "vue"
// ]

// const voteCountReducer = (finalCount, vote) => {
//     if(finalCount[vote]){
//         finalCount[vote]++;
//     } else {
//         finalCount[vote] = 1;
//     }
//     return finalCount;
// }

// const voteCountReducer = (finalCount, vote) => {
//     finalCount[vote] ? finalCount[vote]+=1 : finalCount[vote]=1
//     return finalCount
// }

// const tally = votes.reduce(voteCountReducer, {});
// console.log(tally)

//------------------------------Example 3
// Using reduce as Map
// const data = [1, 2, 3];
// const mapReducer = (acc, val) => {
//   acc.push(val * 2);
//   return acc;
// };
// const finalResult = data.reduce(mapReducer, []);
// console.log(finalResult);

// Using reduce as Filter
// const data1 = [1, 2, 3, 4, 5, 6,7,8];
// const filterReducer = (acc, val) => {
//   if (val % 2 === 0) {
//     acc.push(val);
//   }
//   return acc;
// };
// const finalResult1 = data1.reduce(filterReducer, [])
// console.log(finalResult1);

//Using chained map and filter
// const data = [1, 2, 3, 4, 5, 6,7,8,10];

// const filteredMap = data.filter((item) => item % 2 === 0).map(item => item * 2)

// console.log(filteredMap)

//------------------------------------Example 4
//Performance mock of filter and map as compared with reduce

//Adding million items
// const bigData = []
// for(let i = 0; i < 1000000; i++){
//     bigData.push(i);
// }

//Time taken to process million items using filter and map => 36.08 ms
// console.time("bigData")
// const filteredMap = bigData.filter((item) => item % 2 === 0).map(item => item * 2)
// console.timeEnd("bigData")

//Time taken to process million items using reduce => 20.8 ms
// console.time("bigData Reduce")
// const reduceBigData = bigData.reduce((acc,val) => {
//     if(val % 2 === 0) {
//         acc.push(val * 2)
//     }
//     return acc
// },[])
// console.timeEnd("bigData Reduce")

//---------------------------------------Example 5
// Using 2 optional arguments in reduce (index and array)
// better to use index if required and make the function a pure function
// const data = [1,2,3]

// function reducer(acc,val,index,arr){
//     let currentVal = acc + val;
//     if(index === arr.length - 1){
//         return currentVal / arr.length;
//     }
//     return currentVal;
// }
// const result = data.reduce(reducer,0)
// console.log(result)

//--------------------------------------------Example 6
// One of the pattern to use reduce for flattening map
// const data = [
//   {
//     title: "abc",
//     numbers: [1, 2, 4, 5],
//   },
//   {
//     title: "abc",
//     numbers: [2, 6, 7, 9],
//   },
//   {
//     title: "abc",
//     numbers: [0, 2, 3, 8,2],
//   },
// ];

// function reducer(acc, val) {
//   for (let ele of val.numbers) {
//     if (acc.indexOf(ele) === -1) {
//       acc.push(ele);
//     }
//   }
//   return acc;
// }

// const result = data.reduce(reducer, []);
// console.log(result);


//-----------------------------------------Example 7
//Using reduceRight which starts from array end
// const arr = [1,2,3,4,5]
// const reducer = (acc,val) => {
//     acc.push(val)
//     return acc
// }

// const final = arr.reduceRight(reducer, [])
// console.log(final)      // [5,4,3,2,1]



//----------------------------------------Example 8
//To work on nested objects
// const luke = {
//     name: "luke skywalker",
//     jedi: true,
//     parents: {
//       father: {
//         jedi: true
//       },
//       mother: {
//         jedi: false
//       }
//     }
//   }
  
//   const han = {
//     name: "han solo",
//     jedi: false,
//     parents: {
//       father: {
//         jedi: false
//       },
//       mother: {
//         jedi: false
//       }
//     }
//   }
  
//   const anakin = {
//     name: "anakin skywalker",
//     jedi: true,
//     parents: {
//       mother: {
//         jedi: false
//       }
//     }
//   }
  
//   const characters = [luke, han, anakin];
  
//   function fatherWasJedi(character) {
//     let path = "parents.father.jedi";
//     return path.split(".").reduce(function(obj, field) {
//       if (obj) {
//         return obj[field];
//       }
  
//       return false;
//     }, character);
//   }
  
//   characters.forEach(function(character) {
//     console.log(character.name + "'s father was a jedi:", fatherWasJedi(character)) 
//   });


//------------------------Example 9
//Function composition using reduce method
// function increment(input) { return input + 1;}
// function decrement(input) { return input - 1; }
// function double(input) { return input * 2; }
// function halve(input) { return input / 2; }

// let initial_value = 1;

// const pipeline = [
//   increment,
//   increment,
//   increment,
//   double,
//   increment,
//   increment,
//   halve
// ];

// const final_value = pipeline.reduce(function(acc, fn) {
//   return fn(acc);
// }, initial_value);

// const reversed = pipeline.reduceRight(function(acc, fn) {
//   return fn(acc);
// }, initial_value)

// console.log("final_value: ", final_value)
// console.log("reversed: ", reversed)
