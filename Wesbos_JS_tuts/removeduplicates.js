var removeDuplicates = function(array){
    let uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    
    
}

// second method using set
// const uniqueset = new Set(array);
// const uniquearray = [...uniqueset];

// console.log(removeDuplicates([1,5,5,2,3,4,4]));

removeDuplicates([1,5,5,2,3,4,4]);
let a =[1,5,5,2,3,4,4];
console.log(a.length);