function mergeArrays(keys, values) {
    let finalObj = values.reduce(function(finalObj, value, index){
        console.log({finalObj,value,index})
        finalObj[keys[index]] = value;
        return finalObj;
    }, {})
    console.log(finalObj);
}

mergeArrays(['username', 'first-name', 'last-name', 'age'],['johndoe', 'John', 'Doe', 35]);