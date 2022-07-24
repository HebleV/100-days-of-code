//Example 1 - Higher Order Function
const withCount = (fn) => {
  let counter = 0;
  return (...args) => {
    console.log("counter", ++counter);
    return fn(...args);
  };
};

const add = (a, b) => a + b;

// This shows the result and also how many times the function has been called
let count = withCount(add);
// console.log(count(1,2))
// console.log(count(4,2))
// console.log(count(3,2))



//Example 2 - Immutable functions
//mutable func
// const a = [1,2,3]
// const b = a;
// console.log(a === b)
// b.push(4)
// console.log(a)
// console.log(b)

//Immutable functions
// 1-Using closure
// const ImmutablePush = (val) => (arr) => {
//     const clone = [...arr]
//     clone.push(val)
//     return clone
// }
// const b = ImmutablePush(4)(a)
// console.log(b)
// console.log(a === b)

// 2-Normal way
// const ImmutablePush = (val,arr) => {
//     const clone = [...arr]
//     clone.push(val)
//     return clone
// }
// const b = ImmutablePush(4,a)
// console.log(b)
// console.log(a === b)



//Example 3 - Currying function
//Currying is a way of converting a function with multiple arguments
//into a series of unary function (function with single arg)

//Normal way
// function sum(a,b,c){
//     return a + b + c
// }

// console.log(sum(1,2,3))

//Curried function
// const sum = a => b => c => a + b + c;

// const result = sum(1)
// const val = result(2)
// console.log(val(3))



//Example 4 - Partial Application
//Partial Application occurs whenever a curried function have some of its function
// applied but not all

// curried func using fetch & API
// const fetchAPI = (baseURL) => (endpoint) => (cb) => {
//   fetch(`${baseURL}${endpoint}`)
//     .then((res) => res.json())
//     .then((data) => cb(data))
//     .catch((err) => console.error(err));
// };

// const baseURL = `https://api.github.com`;
// const fetchGithubData = fetchAPI(baseURL); //baseURL arg

// const fetchGithubUsers = fetchGithubData("/users"); //endpoint arg
// const fetchGithubAvatar = fetchGithubData("/avatar"); //endpoint arg

// fetchGithubUsers((data) => console.log(data)); //cb arg
// fetchGithubAvatar((data) => console.log(data)); //cb arg

// console.log(fetchFilms)
// console.log(fetchPlanets)



//Example 5 - Composition
const convertUpperCase = (str) => str.toUpperCase();
const repeat = (str) => `${str} ${str}`;

const compose = (...fn) => (str) => fn.reduceRight((acc,fn) => fn(acc),str);

const changeStr = compose(convertUpperCase,repeat)
console.log(changeStr('Hello World'))