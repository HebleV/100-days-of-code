function mergeArrays(keys, values) {
    let finalObj = values.reduce(function(finalObj, value, index){
        console.log({finalObj,value,index})
        finalObj[keys[index]] = value;
        return finalObj;
    }, {})
}

mergeArrays(['username', 'first-name', 'last-name', 'age'],['johndoe', 'John', 'Doe', 35]);
//output 
// {
//     username: 'johndoe',
//     'first-name': 'John',
//     'last-name': 'Doe',
//     age: 35
//   }