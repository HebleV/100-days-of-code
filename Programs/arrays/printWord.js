// This will print a word if it occurs more than once

function printTwice(arr) {
    let newObj = {};
    for (let word of arr) {
        newObj[word] = newObj[word] + 1 || 1;
    }
    for(let ele in newObj) {
        if(newObj[ele] > 1) {
            console.log(`${ele} =  ${newObj[ele]}`);
        }
    }
}

printTwice(['hi','bye','hi','hello','hey','bye','hi']);