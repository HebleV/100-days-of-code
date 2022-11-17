function countFrequencies(arr, query){
    let map = new Map();
    const resultArr = [];
    let value;
    for(let i = 0; i<arr.length; i++){
        if(map.has(arr[i])){
            value = map.get(arr[i]);
            map.set(arr[i],value+1);
        } else {
            map.set(arr[i], 1);
        }
    }
    for(let i = 0; i<query.length; i++){
        if(map.has(query[i])){
            value = map.get(query[i]);
            // console.log("x",value)
            resultArr.push(value)
        } else {
            resultArr.push(0)
        }
    }
    return resultArr;
}

const arr1 = [1,2,1,1];
const query1 = [1,2];

const arr2 = [ 6, 3, 3, 6, 7, 8, 7, 3, 7 ];
const query2 = [ 10, 9, 8 ];
console.log(countFrequencies(arr2,query2));