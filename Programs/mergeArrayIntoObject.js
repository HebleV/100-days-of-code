function mergeArrays(keys, values) {
    let finalObj = values.reduce(function(finalObj, value, index){
        finalObj[keys[index]] = value;
        return finalObj;
    }, {})
    console.log(finalObj)
}

mergeArrays(['username', 'first-name', 'last-name', 'age'],['johndoe', 'John', 'Doe', 35]);

//output 
// {
//     username: 'johndoe',
//     'first-name': 'John',
//     'last-name': 'Doe',
//     age: 35
//   }


// let firstname = ['leo','cr7','neymar'];
// let lastname = ['messi','ronaldo','jr'];

// let players = {
//     [firstname.shift()] : lastname.shift(),
//     [firstname.shift()] : lastname.shift(),
//     [firstname.shift()] : lastname.shift(),
// }
// console.log(players);