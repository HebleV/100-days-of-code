
//   const outer = function(a,b) {
//       return (a + b);
//   }
// console.log(outer(2,3)); -->

// function outer(a) {
//      function inner(b) {
//         return (a+b);
//     }
//     return inner;
// }
// const sum = outer(1);
// const sum1 = outer(2);
// console.log(sum(5));
// console.log(sum1(2));

function print(a){
    return function sum(a){
        return a + 2;
    }
}
var x = print(2);
console.log(x);
console.log(x(4));

/* 
1- https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
2- https://www.geeksforgeeks.org/closure-in-javascript/
3- https://gist.github.com/amysimmons/3d228a9a57e30ec13ab1
4- https://medium.com/javascript-in-plain-english/using-callbacks-and-closures-in-javascript-2261030cbbf5
5- http://www.javascriptkit.com/javatutors/closures2.shtml
On an honest note, why would JS allow the use of a variable outside of its scope in this way?
A function cannot hold state or memory. There isn’t a way for a function to “remember” previous executions since it will be cleaned up.
Closures are the solution to that problem. By returning an inner function from an outer function you retain the scope where the inner function was defined (called the lexical scope) and therefor you have the ability to remember variables and values.
What would be a real time practical example of it where such a concept is utilized ?
React Hooks uses closures.
Any time you would need function that had state or “memory” that could be updated you would need to use a closure.
If you wanted to create a function that could only be executed once for example, you would use a closure. You can track the executions as a outer variable and stop the function from running after a certain amount of executions.
*/
