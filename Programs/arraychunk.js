// function chunk(arr,size) {
//     let chunked = [];
//     for(let ele of arr) {
//         let last = chunked[chunked.length - 1];
//         console.log({last});
//         if(!last || last.length === size) {
//             chunked.push([ele]);
//         } else {
//             last.push(ele);
//         }
//     };
//     console.log(chunked.length);
//     return chunked;
// }



// function chunk(arr,size) {
//     let chunked = [];
//     for (let ele of arr) {
//         console.log(ele);
//         const subArr = chunked[chunked.length-1];
//         (!subArr || subArr.length === size) ? chunked.push([ele]) : subArr.push(ele);
//     }
//     return chunked;
// }

//Create empty array to hold chunks 
//For of loop element in unchunked i.e. arr array
    //Retrieve the last element i.e. lastArr from chunked array
    //if last ele doesn't exist, or if its length is equal to chunk size
        //Push a new chunk into chunked with current element
    //Else add current element into chunk



//Using slice method => 
//slice(0,3) => It starts from 0 but it stops one before the endsize i.e. till length of 2
function chunk(arr,size){
    let chunked = [];
    let index = 0;
    while(index < arr.length) {
        let x = arr.slice(index, index + size);
        chunked.push([x]);
        index = index + size;
    }
    return chunked;
}

console.log(chunk(['a','b','c','d','e'],3));
