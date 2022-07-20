// Link - https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
//Example 1 => Basic usage
// function* createLogger(){
//     console.log("start")
//     console.log("end")
// }

// const logger = createLogger();
// logger.next()

//Example 2 => using yield keyword
//=> yield will pause or stop the function. To call next line, add .next() to call again
// function* createLogger(){
//     console.log("start")
//     yield
//     console.log("end")
// }

// const logger = createLogger();
// logger.next()
// logger.next()

//Example 3 => using yield keyword one can send data from generator function to its and instance
// function* createLogger(){
//     yield 'hello'
// }

// const logger = createLogger();
// console.log(logger.next()) //This will return a object with value and done properties
// //=> {value: 'hello', done: false}
// console.log(logger.next()) //This time done flag will be true as execution is complete
// //=> {value: undefined, done: true}

//Example 4 => using yield, one can send data from instance back to generator function too
// function* createHello(){
//     const word = yield
//     console.log(word)
// }

// const logger = createHello()
// logger.next()
//logger.next('Hello') //Here we are passing the 'Hello' as the word argument. This will print hello which is console logged in generator function

//Example 5 => Error handling in generators using try catch and .throw()
// function* createHello() {
//   try {
//     const word = yield;
//     console.log(word);
//   } catch (err) {
//     console.log("Err", err);
//   }
// }

// const hello = createHello();
// hello.next();
// hello.next("hi");
// hello.throw("Oops");

//Example 6 => iterating generators function using for of loop
// function* createCounter(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4
// }

// const counter = createCounter()
// for(let i of counter) {
//     console.log(i)
// }

//Example 7 => Delegate generator iteration function
// function* create3ToCounter4(){
//     yield 3
//     yield 4 //You can also return like return 4
// }

// function* createCounter(){
//     yield 1
//     yield 2
//     yield* create3ToCounter4() //You can also assign val to variable like const four = yield* create3ToCounter4()
//     yield 5
// }

// const counter = createCounter()
// for(let i of counter){
//     console.log(i)
// }

//Example 8 => Generators and promises
// const API_URL = "https://starwars.egghead.training/";

// function* fetchStars() {
//     const response = yield fetch(API_URL + "films");
//     const data = yield response.json();
//     return data
//   }
  
//   const result = fetchStars()
//   result.next().value
//   .then(data => result.next(data).value)
//   .then(res => console.log("data",res))